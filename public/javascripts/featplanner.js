/*****************************************************************************
Copyright 2012 Mariusz Zieliński

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*******************************************************************************/

function Feat(tree, row, column, imgIndex, availablePoints, parent, featDescription) {
    if (row == undefined || column == undefined || imgIndex == undefined || availablePoints == undefined)
        return undefined;

    this.tree = tree;
    this.row = row;
    this.column = column;
    this.availablePoints = availablePoints;
    this.imgIndex = imgIndex;
    this.usedPoints = 0;
    this.parent = parent;
    this.size = 38;
    this.description = featDescription;
    this.description.parent = this;

    this.IncreaseUsedPoints = function () {
        var p = this.usedPoints + 1;
        if (p <= this.availablePoints) {
            this.usedPoints = p;
            return true;
        }

        return false;
    }

    this.DecreaseUsedPoints = function () {
        var p = this.usedPoints - 1;
        if (p >= 0) {
            this.usedPoints = p;
            return true;
        }

        return false;
    }

    this.GetDescription = function () {
        return this.description.GetDescription();
    }

    this.PointsNeeded = function () {
        return (this.row - 1) * 5;
    }

    this.HasAnyPoints = function () {
        return this.usedPoints != 0;
    }

    this.Points = function () {
        return this.usedPoints;
    }

    this.IsFullyFitted = function () {
        return this.usedPoints == this.availablePoints;
    }
}

var FeatDescription = function (title, modificators, description) {
    this.title = title;
    this.parent = null;
    this.modificators = modificators;
    this.description = description;

    this.GetDescription = function () {
        var result = "<div class='title'>" + this.title + "</div>";
        if (this.parent.row != null) {
            result += "<div class='requirements'><div class='title'>Requirements</div>";
            // requirements
            var lvl = 0;
            if (this.parent.row < 6) {
                lvl = (this.parent.row + 1) * 5;
            } else {
                lvl = 30 + (this.parent.row - 5) * 10;
            }

            result += "<div class='r'>You must be at least level " + lvl + "</div>";
            if (this.parent.row > 1) {
                result += "<div class='r'>" + ((this.parent.row - 1) * 5) + " ranks purchased in this Feat Tree</div>";
            }

            result += "</div>";
        }

        // modifications
        if (this.modificators.length > 0) {
            var obj = this;
            var points = this.parent.Points();

            // display for current rank
            if (points > 0) {
                var addCode = '';
                require(['dojo/_base/array'], function (array) {
                    array.forEach(obj.modificators, function (e, i) {
                        var sval = e.s[points - 1] || 0;
                        if (sval != 0)
                            addCode += "<div class='m'><span class='" + (sval >= 0 ? 'green' : 'red') + "'>" + (sval > 0 ? '+' : '') + sval + (e.suf || '') + "</span> " + e.t + "</div>";
                    });
                });

                if (addCode != '')
                    result += "<div class='modifications'><div class='title'>Modifications</div>" + addCode + "</div>";
            }

            // display for next rank
            if (!this.parent.IsFullyFitted()) {
                var addCode = '';
                require(['dojo/_base/array'], function (array) {
                    array.forEach(obj.modificators, function (e, i) {
                        var sval = e.s[points];
                        if (sval != 0)
                            addCode += "<div class='m'><span class='" + (sval >= 0 ? 'green' : 'red') + "'>" + (sval > 0 ? '+' : '') + sval + (e.suf || '') + "</span> " + e.t + "</div>";
                    });
                });

                if (addCode != '')
                    result += "<div class='modifications'><div class='title'>Next rank</div>" + addCode + "</div>";
            }
        }

        result += "<div class='description'><div class='title'>Description</div>" + this.description + "</div>";
        return result;
    }
}

function FeatPlanner(settings) {
    var feats = null;
    var usedPoints = null;
    var emptyLink = '00000000000000000000000000000000000000000000000000000000000000000000000';

    var TotalUsedPoints = function () {
        return usedPoints[1] + usedPoints[2] + usedPoints[3];
    }

    var ShowPoints = function () {
        require(['dojo/query', 'dojo/NodeList-manipulate'], function (q) {
            var total = TotalUsedPoints();
            q('#used-points').text(total);
            q('#available-points').text(79 - total);

            q('#tree1').text(usedPoints[1]);
            q('#tree2').text(usedPoints[2]);
            q('#tree3').text(usedPoints[3]);
        });
    }

    var CreateLink = function () {
        require(['dojo/query', 'dojo/_base/array', 'dojo/NodeList-manipulate'], function (q, a) {
            var vals = q('#link').text().split('/');
            ;
            var newLink = '';
            for (i = 0; i < vals.length - 1; i++) {
                newLink += vals[i] + '/';
            }

            var featVals = '';
            a.forEach(feats, function (e, i) {
                featVals += e.Points();
            });

            newLink += featVals;

            q('#link').text(newLink);
        });
    }

    var AddPoint = function (idx) {
        usedPoints[idx] += 1;
        ShowPoints();
        CreateLink();
    }

    var RemovePoint = function (idx) {
        usedPoints[idx] -= 1;
        ShowPoints();
        CreateLink();
    }

    var FindParent = function (feat) {
        var parent = null;
        if (feat.parent != null) {
            var parentX = feat.parent[0], parentY = feat.parent[1];
            require(['dojo/_base/array'], function (array) {
                parent = array.filter(feats, function (item) {
                    return item.tree == feat.tree && item.row == parentX && item.column == parentY;
                })[0];
            });
        }

        return parent;
    }

    var FeatCellCode = function (feat) {
        var enabled = IsEnabled(feat);
        var fateCode = '<div class="border" style="'
            + 'width: 44px;'
            + 'height: 44px;'
            + 'left: ' + (feat.row == 1 ? 27 : 0) + 'px;'
            + 'top: -3px;'
            + 'background-image: url(/assets/images/borders.png);'// : 'url(/assets/images/border_orange.png)') : 'url(/assets/images/border.png)') + ' repeat scroll 100% center transparent;'
            + 'background-position: ' + (enabled ? (feat.IsFullyFitted() ? '88px' : '44px') : '0px') + ' 0px;'
            + '"></div>'
            + '<div class="feat" style="'
            + (feat.row == 1 ? 'left: 30px;' : '') + 'background-image: url('
            + (feat.tree == 3 ? settings.generalTree : settings.classTree) + '); background-position: '
            + (-feat.imgIndex * feat.size).toString() + 'px ' + (feat.PointsNeeded() <= usedPoints[feat.tree] ? feat.size : 0)
            + 'px;"></div><div class="an"'
            + (feat.row == 1 ? ' style="left: 30px;"' : '') + '>';

        if (feat.parent != null) {
            var parent = FindParent(feat);

            if (feat.column == parent.column && feat.row != parent.row) {
                var diff = (feat.row - parent.row);
                var offset = (diff > 1 ? 20 : 0);
                fateCode += '<div style="position: absolute; left: -5px; top: -'
                    + (32 + (diff * 38) + offset) + 'px;'
                    + 'px; background-image: url(/assets/images/arrow_vertical.png); width: 48px; height: '
                    + ((diff * 38) + offset)
                    + 'px; z-index: 0;"></div>';
            } else if (feat.row == parent.row && feat.column > parent.column) {
                fateCode += '<div style="position: absolute; top: -38px; left: -20px; background-image: url(/assets/images/arrow_right.png); height: 25px; width: 32px; z-index: 0;"></div>';
            } else if (feat.row == parent.row && feat.column < parent.column) {
                fateCode += '<div style="position: absolute; top: -38px; left: 35px; background-image: url(/assets/images/arrow_left.png); height: 37px; width: 32px; z-index: 0;"></div>';
            }

        }

        fateCode += '<div class="points" style="'
            + 'width: ' + feat.availablePoints * 9 + 'px;'
            + 'left: ' + (feat.row == 1 ? '-3' : ((5 - feat.availablePoints) * 4) + 1) + 'px;'
            + 'background-position: 0px ' + (-feat.usedPoints * 6) + 'px;"></div>'; //<div class="s">'
        //+ feat.usedPoints + '</div><div class="a">/' + feat.availablePoints + '</div></div></div>';

        return fateCode;
    }

    var HideDescription = function (e) {
        require(['dojo/query', 'dojo/NodeList-manipulate'], function (q) {
            q('#feat-description').style('display', 'none');
        });
    }

    var ShowDescription = function (e) {
        var item = e.currentTarget || e.fromTarget;
        if (item == undefined)
            return;

        require(['dojo/dom-class', 'dojo/query', 'dojo/dom-geometry', "dojo/window", 'dojo/NodeList-manipulate'], function (dc, q, geo, w) {
            if (!dc.contains(e.target, "feat") && !dc.contains(e.target, "border"))
                return;

            var id = item.id;
            var idx = new Number(id);

            var feat = feats[idx];
            var desc = q('#feat-description');
            desc.style('top', '');
            desc.style('display', 'none');
            desc.innerHTML(feats[idx].GetDescription());
            q('#' + idx + ' div.an').prepend(desc);

            desc.style('display', 'block');
            var position = geo.position(desc[0]);
            var box = w.getBox();

            if ((position.y + position.h) > box.h) {
                desc.style('top', new Number(desc.style('top')) + (box.h - (position.y + position.h)) + 'px');
            }
        });
    }

    var IsEnabled = function (feat) {
        return (feat.PointsNeeded() <= usedPoints[feat.tree] && (feat.parent == null || (feat.parent != null && FindParent(feat).IsFullyFitted())));
    }

    var ToggleFeat = function (feat) {
        require(['dojo/query', 'dojo/_base/array', 'dojo/dom', 'dojo/NodeList-manipulate', 'dojo/NodeList-dom', 'dojo/_base/lang'], function (query, a, dom) {
            var enabled = IsEnabled(feat);

            var idx = a.indexOf(feats, feat).toString();
            var x = (-feat.imgIndex * feat.size).toString() + 'px';
            var y = (enabled ? feat.size : 0) + 'px';

            //var oldY = q('div.fh').at(a.indexOf(feats, feat)).style('backgroundPosition')[0].split(' ')[1];
            var oldY = query('.feat', dom.byId(idx)).style('backgroundPosition')[0].split(' ')[1];

            if (y.trim() != oldY.trim()) {
                /// update only feats which should be changed
                query('.feat', dom.byId(idx))
                    .style("backgroundPosition", x + ' ' + y);

                query('.border', dom.byId(idx))
                    .style("backgroundPosition", (enabled ? (feat.IsFullyFitted() ? '88px' : '44px') : '0px') + " 0px");
            }
        });
    }

    var DisableIfNoPoints = function (feat) {
        require(['dojo/query', 'dojo/_base/array', 'dojo/dom', 'dojo/NodeList-manipulate', 'dojo/NodeList-dom'], function (q, a, dom) {
            var idx = a.indexOf(feats, feat).toString();
            q('.feat', dom.byId(idx))
                .style("backgroundPosition", (-feat.imgIndex * feat.size).toString() + 'px ' + (feat.HasAnyPoints() ? feat.size : 0) + 'px');

            q('.border', dom.byId(idx))
                .style("backgroundPosition", (feat.HasAnyPoints() ? (feat.IsFullyFitted() ? 88 : 44) : 0) + 'px 0px');
        });
    }

    var CheckImages = function (feat) {
        require(['dojo/_base/array'], function (a) {
            a.forEach(feats, function (item, idx) {
                if (TotalUsedPoints() < 79) {
                    ToggleFeat(item);
                } else if (TotalUsedPoints() == 79) {
                    DisableIfNoPoints(item);
                }
            });


        });
    }

    var LeftClick = function (e) {
        var item = e.fromTarget || e.currentTarget;
        if (item == undefined)
            return;

        require(['dojo/query', 'dojo/NodeList-manipulate'], function (query) {
            var id = new Number(item.id);

            var feat = feats[id];
            if ((feat.PointsNeeded() > usedPoints[feat.tree]) ||
                (TotalUsedPoints() >= 79) ||
                (feat.parent != null && !FindParent(feat).IsFullyFitted()))
                return false;

            if (feat.IncreaseUsedPoints()) {
                AddPoint(feat.tree);

                var node = query.NodeList();
                node.push(item);

                query('#feat-description').innerHTML(feats[id].GetDescription());
                UpdatePointsAndBorder(node, feat);
                CheckImages(feat);
            }
        });

        return false;
    }

    var UpdatePointsAndBorder = function (node, feat) {
        require(['dojo/query'], function (query) {
            node.query('div.points').style('backgroundPosition', '0px ' + (-feat.usedPoints * 6) + 'px');
            node.query('div.border').style("backgroundPosition", (IsEnabled(feat) ? (feat.IsFullyFitted() ? '88px' : '44px') : '0px'));
        });
    }

    var RightClick = function (e) {
        var item = e.fromTarget || e.currentTarget;
        if (item == undefined)
            return false;

        require(['dojo/query', 'dojo/NodeList-manipulate'], function (query) {
            var id = new Number(item.id);

            var feat = feats[id];
            var allowed = true;
            var sum = 0;
            var childEmpty = true;
            var maxReq = 0;

            require(["dojo/_base/array"], function (array) {
                array.forEach(feats, function (entry, i) {
                    if (entry.tree == feat.tree) {
                       if (entry.parent != null && entry.parent[0] == feat.row && entry.parent[1] == feat.column) {
                            childEmpty = !entry.HasAnyPoints();
                        }

                        if (entry.row > feat.row && entry.HasAnyPoints()) {
                            allowed = false;
                        } else if (entry.row <= feat.row && entry.HasAnyPoints()) {
                            sum += entry.Points()
                        }

                        if (entry.HasAnyPoints() && entry.PointsNeeded() > maxReq)
                            maxReq = entry.PointsNeeded();
                    }
                });
            });

            if (childEmpty && (allowed || (!allowed && sum > (feat.PointsNeeded() + 5)))
                && (feat.PointsNeeded() == maxReq || maxReq < usedPoints[feat.tree] - 1) && feat.DecreaseUsedPoints()) {
                RemovePoint(feat.tree);
                var nl = query.NodeList();
                nl.push(item);
                UpdatePointsAndBorder(nl, feat);
                query('#feat-description').innerHTML(feats[id].GetDescription());

                CheckImages(feat);
            }
        });

        return false;
    }

    var Clear = function () {
        Initialize(false);
        ShowPoints();
        CheckImages();
        CreateLink();
    }

    var Initialize = function (load) {
        if (settings == undefined || settings.classTree == undefined)
            return;

        usedPoints = [0, 0, 0, 0];
        feats = classFeats().concat(generalFeats());

        require(['dojo/_base/array', 'dojo/query', "dojo/dom", 'dojo/NodeList-manipulate', 'dojo/on', 'dojo/domReady!'], function (array, query, dom, domc, on) {
            array.forEach(feats, function (e, i) {
                var innerDiv = query('div#feat-planner table').at(e.tree - 1).query('tr').at(e.row).query('td').at(e.column - 1).query('div')[0];

                if (load) {
                    var p = new Number(settings.link[i]);
                    e.usedPoints = p;
                    usedPoints[e.tree] += p;

                    innerDiv.id = i;
                    innerDiv.onmouseover = ShowDescription;
                    innerDiv.onmouseout = HideDescription;
                    innerDiv.onclick = LeftClick;
                    innerDiv.oncontextmenu = RightClick;
                }

                innerDiv.innerHTML = FeatCellCode(e);
            });

            query('#feat-planner-container').after('<div id="feat-description"></div>');

            if (load) {
                ZeroClipboard.setMoviePath(settings.zeroClipboardPath || alert('Could not load ZeroClipboard library!'));
                var clip = new ZeroClipboard.Client();
                clip.addEventListener("onMouseDown", function () {
                    clip.setText(dom.byId('link').innerHTML);
                });
                clip.glue('link');

                on(window, "resize", function () {
                    clip.reposition();
                });

                query('#clear-button').on('click', Clear);
                ShowPoints();
                CheckImages();
                CreateLink();
            }
        });


    }

    return {
        Initialize:function (load) {
            Initialize(load);
        }
    }
}
