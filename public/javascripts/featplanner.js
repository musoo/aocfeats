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

function Feat(id, tree, row, column, imgIndex, availablePoints, parent, featDescription) {
    if (row == undefined || column == undefined || imgIndex == undefined || availablePoints == undefined)
        return undefined;

    this.id = id;
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
}

require(["dojo/string"], 
function(string) {

Feat.prototype.SortId = function() {
    var shouldAdd = parent != null && parent[0] == this.row && parent[1] > this.column;
    return new Number(this.tree.toString() + this.row.toString() + (shouldAdd ? parent[1] : this.column).toString() + (shouldAdd ? '1' : '0'));
}

Feat.prototype.Id = function() {
    return string.pad((this.id + this.usedPoints - 1).toString(16), 5, '0');
}


Feat.prototype.RawId = function() {
    return this.id.toString().substr(0, this.id.toString().length - 1)
}

Feat.prototype.IncreaseUsedPoints = function (fullyFit, maxPoints) {
    var p = 0;
    if (fullyFit) {
        p = this.usedPoints + (maxPoints <= this.availablePoints ? maxPoints : this.availablePoints - this.usedPoints);
    } else {
        p = this.usedPoints + 1;
    }

    if (p <= this.availablePoints) {
        this.usedPoints = p;
        return true;
    }

    return false;
}

Feat.prototype.DecreaseUsedPoints = function () {
    var p = this.usedPoints - 1;
    if (p >= 0) {
        this.usedPoints = p;
        return true;
    }

    return false;
}

Feat.prototype.GetDescription = function () {
    return this.description.GetDescription();
}

Feat.prototype.PointsNeeded = function () {
    return (this.row - 1) * 5;
}

Feat.prototype.HasAnyPoints = function () {
    return this.usedPoints != 0;
}

Feat.prototype.Points = function () {
    return this.usedPoints;
}

Feat.prototype.IsFullyFitted = function () {
    return this.usedPoints == this.availablePoints;
}

}); //!-- require

var FeatDescription = function (title, modificators, description) {
    this.title = title;
    this.parent = null;
    this.modificators = modificators;
    this.description = description;
}

require(['dojo/_base/array'],
function (array) {

FeatDescription.prototype.GetDescription = function () {
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
            array.forEach(obj.modificators, function (e, i) {
                var sval = e.s[points - 1] || 0;
                if (sval != 0)
                    addCode += "<div class='m'><span class='" + (sval >= 0 ? 'green' : 'red') + "'>" + (sval > 0 ? '+' : '') + sval + (e.suf || '') + "</span> " + e.t + "</div>";
            });

            if (addCode != '')
                result += "<div class='modifications'><div class='title'>Modifications</div>" + addCode + "</div>";
        }

        // display for next rank
        if (!this.parent.IsFullyFitted()) {
            var addCode = '';
            array.forEach(obj.modificators, function (e, i) {
                var sval = e.s[points];
                if (sval != 0)
                    addCode += "<div class='m'><span class='" + (sval >= 0 ? 'green' : 'red') + "'>" + (sval > 0 ? '+' : '') + sval + (e.suf || '') + "</span> " + e.t + "</div>";
            });

            if (addCode != '')
                result += "<div class='modifications'><div class='title'>Next rank</div>" + addCode + "</div>";
        }
    }

    result += "<div class='description'><div class='title'>Description</div>" + this.description + "</div>";
    result += "<div class='help'>ctrl + left click - add all points</br>left click - add point</br>right click - remove point</div>";
    return result;
}

}); //!-- require


function FeatPlanner(settings) {

    var _pointHeight = 16;
    var _pointWidths = [13, 10, 10, 9, 12]
    var _locked = false;

    var feats = null;
    //var usedPoints = null;
    var emptyLink = '00000000000000000000000000000000000000000000000000000000000000000000000';

    var UsedPoints = function(featTree) {
        var total = 0;
        require(["dojo/_base/array"], function (array) {
            array.forEach(feats, function (entry, i) {
                if (entry.tree == featTree)
                    total += entry.usedPoints;
            });
        });
        return total;
    }

    var TotalUsedPoints = function () {
        var total = 0;
        require(["dojo/_base/array"], function (array) {
            array.forEach(feats, function (entry, i) {
                total += entry.usedPoints;
            });
        });
        return total;
    }

    var TotalAvailablePoints = function() { 
        return 79 - TotalUsedPoints();   
    }

    var ShowPoints = function () {
        require(['dojo/query', 'dojo/NodeList-manipulate'], function (q) {
            var total = TotalUsedPoints();
            q('#used-points').text(total);
            q('#available-points').text(79 - total);

            q('#tree1').text(UsedPoints(1));
            q('#tree2').text(UsedPoints(2));
            q('#tree3').text(UsedPoints(3));
        });
    }

    var CreateLink = function() { 
        CreateIngameLink();
    }

    var CreateOutOfGameLink = function () {
        require(['dojo/query', 'dojo/_base/array', 'dojo/NodeList-manipulate'], function (q, a) {
            var newLink = q('#link-base').text();
            var featVals = '';
            a.forEach(feats, function (e, i) {
                featVals += e.Points();
            });

            newLink += featVals;

            q('#link').text(newLink);
        });
    }

    var CreateIngameLink = function () {
        require(['dojo/query', 'dojo/_base/array', 'dojo/NodeList-manipulate'], function (q, a) {
            var featVals = q('#link-id').text();
            var feated = [];
            a.forEach(feats, function (e, i) {
                if (e.HasAnyPoints()) {
                    feated[e.SortId()] = e.Id();
                }
            });

            a.forEach(feated, function(e, i) {
                if (typeof e != 'undefined')
                    featVals += e;
            });

            var oogLink = q('#link-base').text() + featVals;
            var oogDescription = q('.feat-tree:nth-child(1) th[desc]').text() + ' | ' + q('.feat-tree:nth-child(2) th[desc]').text() + ' | ' + q('.feat-tree:nth-child(3) th[desc]').text();
            q('#link').val(featVals);
            q('#linkbb').val('[url='+ oogLink +']' + oogDescription + '[/url]');
            q('#linkhtml').val("<a href='"+ oogLink +"'>" + oogDescription + "</a>");
            q('#linkurl').val(oogLink);
        });
    }

    var AddPoint = function (feat) {
        //usedPoints[feat.tree] += added;
        ShowPoints();
        CreateLink();
    }

    var RemovePoint = function (idx) {
        //usedPoints[idx] -= 1;
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
            + (feat.row == 1 ? 'left: 30px;' : '') 
            + 'background-image: url('
            + (feat.tree == 3 ? settings.generalTree : settings.classTree) + '); background-position: '
            + (-feat.imgIndex * feat.size).toString() + 'px ' + (feat.PointsNeeded() <= UsedPoints(feat.tree) ? feat.size : 0)
            + 'px;"></div>';

        return fateCode;
    }

    var GetArrowCode = function(feat) {
        var fateCode = '';

        var parent = FindParent(feat);

        if (feat.column == parent.column && feat.row != parent.row) {
            var diff = (feat.row - parent.row);
            var offset = (diff > 1 ? 10 : 0);
            fateCode += '<div style="position: absolute; left: -4px; top: -'
                + ((diff * 38) + offset) + 'px;'
                + 'background-image: url(/assets/images/arrow_vertical.png); width: 48px; height: '
                + ((diff * 38) + offset + 10)
                + 'px; z-index: 0;"></div>';
        } else if (feat.row == parent.row && feat.column > parent.column) {
            fateCode += '<div style="position: absolute; top: 0px;left: -20px; background-image: url(/assets/images/arrow_right.png); height: 25px; width: 32px; z-index: 0;"></div>';
        } else if (feat.row == parent.row && feat.column < parent.column) {
            fateCode += '<div style="position: absolute; top: 0px;left: 38px; background-image: url(/assets/images/arrow_left.png); height: 37px; width: 32px; z-index: 0;"></div>';
        }

        return fateCode;
    }

    var GetPointsCode = function(feat) { 
        var width = 0;
        for (var i = 0; i < feat.availablePoints; i++)
            width += _pointWidths[i];

        return '<div class="points" style="'
            + 'width: ' + width.toString() + 'px;'
            + 'left: ' + (feat.row == 1 ? 22 : (((4 - feat.availablePoints) * 4) + 0)) + 'px;'
            + 'top: 40px;'
            + 'background-position: 0px ' + (-feat.usedPoints * _pointHeight) + 'px;">';
    }

    var HideDescription = function (e) {
        require(['dojo/dom', 'dojo/dom-style'], function (dom, style) {
           style.set(dom.byId('feat-description'), 'display', 'none');
        });
    }

    var ShowDescription = function (e) {
        var item = e.currentTarget || e.fromTarget;
        if (item == undefined)
            return;

        require(['dojo/dom', 'dojo/dom-class', 'dojo/query', 'dojo/dom-geometry', "dojo/window", 'dojo/NodeList-manipulate'], function (dom, dc, q, geo, w) {

            var id = item.id;
            var idx = new Number(id);

            var feat = feats[idx];
            var desc = q('#feat-description');
            //desc.style('top', '-38px');
            //desc.style('left', '60px');
            //desc.style('display', 'none');
            desc.innerHTML(feats[idx].GetDescription());
            var featBox = dom.byId(idx.toString());
            //q('#' + idx + ' div.an').prepend(desc);

            desc.style('display', 'block');

            var featPosition = geo.position(featBox);
            var position = geo.position(dom.byId('feat-description'));
            var box = w.getBox();

            

            var newX = featPosition.x + 60 + (feat.row == 1 ? 25 : 0) ;
            var newY = featPosition.y;

            if ((newY + position.h) > box.h) {
                newY = box.h - position.h - 10;
            }

            if ((newX + position.w) > box.w) {
                newX = newX - 375;
            }

            desc.style('top', newY + 'px');
            desc.style('left', newX + 'px');
        });
    }

    var IsEnabled = function (feat) {
        return (feat.PointsNeeded() <= UsedPoints(feat.tree) && (feat.parent == null || (feat.parent != null && FindParent(feat).IsFullyFitted())));
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
            var totalUsed = TotalUsedPoints();
            a.forEach(feats, function (item, idx) {
                if (totalUsed < 79) {
                    ToggleFeat(item);
                } else if (totalUsed == 79) {
                    DisableIfNoPoints(item);
                }
            });


        });
    }

    var LeftClick = function (e) {
        e.preventDefault();

        if (_locked)
            return;

        var item = e.fromTarget || e.currentTarget;
        if (item == undefined)
            return false;

        var fullFit = e.ctrlKey;

        require(['dojo/query', 'dojo/NodeList-manipulate'], function (query) {
            var id = new Number(item.id);

            var feat = feats[id];
            if ((feat.PointsNeeded() > UsedPoints(feat.tree)) ||
                (TotalUsedPoints() >= 79) ||
                (feat.parent != null && !FindParent(feat).IsFullyFitted()))
                return false;

            if (feat.IncreaseUsedPoints(fullFit, TotalAvailablePoints())) {
                AddPoint(feat);

                //var node = query.NodeList();
                //node.push(item);

                query('#feat-description').innerHTML(feats[id].GetDescription());
                UpdatePointsAndBorder(item, feat);
                CheckImages(feat);
            }

            return false
;        });


        return false;
    }

    var UpdatePointsAndBorder = function (node, feat, ommitCheckingEnabled) {
        ommitCheckingEnabled = typeof ommitCheckingEnabled != 'undefined' ? ommitCheckingEnabled : false;
        require(['dojo/query', 'dojo/dom-style'], function (query, style) {
            style.set(node.nextSibling, 'backgroundPosition', '0px ' + (-feat.usedPoints * _pointHeight) + 'px');
            if (ommitCheckingEnabled) {
                query('div.border', node).style("backgroundPosition", feat.row == 1 ? '44px' : '0px');
            } else {
                query('div.border', node).style("backgroundPosition", 
                    IsEnabled(feat) ? (feat.IsFullyFitted() ? '88px' : '44px') : '0px'
                );
            }
        });
    }

    var RightClick = function (e) {
        e.preventDefault();

        if (_locked)
            return;

        var item = e.fromTarget || e.currentTarget;
        if (item == undefined)
            return false;

        require(['dojo/query', 'dojo/NodeList-manipulate'], function (query) {
            var id = new Number(item.id);

            var feat = feats[id];
            var feated = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      // number of points on each level
            var allowed = true;
            var sum = 0;
            var childEmpty = true;
            var maxReq = 0;
            var maxReqFeated = 0;
            var allLevelsOk = true;

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

                        for (var i = 1; i <= 9; i++) {
                            if (entry.row <= i) {
                                feated[i] += entry.Points();
                            }
                        }
                    }
                });

                var topFeat = maxReq / 5;
                for (var i = feat.row; i <= topFeat; i++) {
                    var xreq = i * 5;
                    if (feated[i] <= xreq) {
                        allLevelsOk = false;
                        break;
                    }
                }               

                array.forEach(feats, function (entry, i) {
                    if (entry.tree == feat.tree && entry.PointsNeeded() == maxReq) {
                        maxReqFeated = maxReqFeated + entry.Points();
                    }
                });
            });

            if (allLevelsOk && childEmpty && (allowed || (!allowed && sum > (feat.PointsNeeded() + 5)))
                && (feat.PointsNeeded() == maxReq || maxReq < UsedPoints(feat.tree) - maxReqFeated) && feat.DecreaseUsedPoints()) {
                RemovePoint(feat.tree);
                UpdatePointsAndBorder(item, feat);
                query('#feat-description').innerHTML(feats[id].GetDescription());
                CheckImages(feat);
            }
        });

        return false;
    }

    var Clear = function (tree) {

        if (_locked)
            return;

        require([
            'dojo/_base/array', 
            'dojo/dom'], 
        function(array, dom) {
            if (typeof tree == 'undefined') {
                array.forEach(feats, function (e, i) {
                    e.usedPoints = 0;
                    var node = dom.byId(i.toString());
                    UpdatePointsAndBorder(node, e, true);               
                });
            } else {
                array.forEach(feats, function (e, i) {
                    if (e.tree == tree)
                    {
                        e.usedPoints = 0;
                        var node = dom.byId(i.toString());
                        UpdatePointsAndBorder(node, e, true);               
                    }
                });
            }
        });

        ShowPoints();
        CheckImages();
        CreateLink();
    }

    var GetChoppedIngameLink = function(link) {
        var result = [];
        link = link.substring(3, link.length)
        for (var i = 0; link.length > 0; i++) {
            var value = link.substring(0, 5);
            var intValue = parseInt(value, 16);
            result[i] = intValue.toString();
            link = link.substring(5, link.length)
        }

        return result;
    }

    var IsValid = function(link) {
        if (link == "")
            return true;

        if (link.length < 3)
            return false;

        if (link.indexOf(document.getElementById('link-id').innerHTML) == 0) {     // hex link
            var sublink = link.substring(3, link.length)
            for (var i = 0; sublink.length > 0; i++) {
                var value = sublink.substring(0, 5);
                if (value.length != 5) return false;
                var intValue = parseInt(value, 16);
                if (isNaN(intValue)) return false;
                sublink = sublink.substring(5, link.length)
            }
        } else if (link.length == feats.length) {                   // decimal link
            for (var i = 0; i < link.length; i++) {
                var intVal = parseInt(link[i]);
                if (isNaN(intVal)) return false;
                if (!(intVal >= 0 && intVal <= 5)) return false;
            }
        } else return false;

        return true;
    }

    var SetupZeroClipboard = function() {
        require(["dojo/dom", "dojo/html", "dojo/on"], function(dom, html, on) {
            ZeroClipboard.setMoviePath(settings.zeroClipboardPath || alert('Could not load ZeroClipboard library!'));
            var clip1 = new ZeroClipboard.Client();
            clip1.addEventListener("onMouseDown", function (event) {
                clip1.setText(dom.byId('link').value);
            });
            clip1.glue('copykey');

            var clip2 = new ZeroClipboard.Client();
            clip2.addEventListener("onMouseDown", function (event) {
                clip2.setText(dom.byId('linkbb').value);
            });
            var html2 = clip2.getHTML(59,24);
            html.set(dom.byId('copybb-cont'), html2);

            var clip3 = new ZeroClipboard.Client();
            clip3.addEventListener("onMouseDown", function (event) {
                clip3.setText(dom.byId('linkhtml').value);
            });
            var html3 = clip3.getHTML(59,24);
            html.set(dom.byId('copyhtml-cont'), html3);

            var clip4 = new ZeroClipboard.Client();
            clip4.addEventListener("onMouseDown", function (event) {
                clip4.setText(dom.byId('linkurl').value);
            });
            var html4 = clip4.getHTML(59,24);
            html.set(dom.byId('copyurl-cont'), html4);

            on(window, "resize", function () {
                clip1.reposition();
                clip2.reposition();
                clip3.reposition();
                clip4.reposition();
            });
        });
    }

    var SetupSelectionOnLink = function() {
        require(["dojo/query"], function(query) {
            query('#link, #linkbb, #linkurl, #linkhtml, #linksurl').on('click, focus', function(e) {
                e.target.select();
            });

            query('#link, #linkbb, #linkurl, #linkhtml, #linksurl').on('mouseup', function(e) {
                e.preventDefault();
            });
        });
    }

    var SetupButtonHighlight = function() {
        require(["dojo/query", "dojo/mouse", "dojo/dom", 'dojo/_base/fx'], function (query, mouse, dom, fx) {
            var movieDict = {'ZeroClipboardMovie_1':'copykey', 
                             'ZeroClipboardMovie_2':'copybb', 
                             'ZeroClipboardMovie_3':'copyhtml', 
                             'ZeroClipboardMovie_4':'copyurl'}

            query('#ZeroClipboardMovie_1, #ZeroClipboardMovie_2, #ZeroClipboardMovie_3, #ZeroClipboardMovie_4').on(mouse.enter, function(e) {
                fx.anim(dom.byId(movieDict[e.target.id]), { "backgroundColor": "#105085" });
            });

            query('#ZeroClipboardMovie_1, #ZeroClipboardMovie_2, #ZeroClipboardMovie_3, #ZeroClipboardMovie_4').on(mouse.leave, function(e) {
                fx.anim(dom.byId(movieDict[e.target.id]), { "backgroundColor": "#091F31" });
            }); 

            query('#lock-button').on(mouse.enter, function(e) {
                fx.anim(e.target, { "backgroundColor": "#4B2020" });
            }); 
            
            query('#lock-button').on(mouse.leave, function(e) {
                fx.anim(e.target, { "backgroundColor": "#0A0501" });
            }); 
        });
    }

    var Initialize = function (load) {
        if (settings == undefined || settings.classTree == undefined)
            return;

        usedPoints = [0, 0, 0, 0];
        feats = classFeats().concat(generalFeats());

        require([
            "dojo/fx/Toggler",
            'dojo/_base/array', 
            'dojo/query', 
            "dojo/dom", 
            'dojo/NodeList-manipulate', 
            'dojo/on', 
            'dojo/mouse',
            'dojo/dom-construct',
            'dojo/dom-style',
            'dojo/html',
            'dojo/domReady!'], 
        function (Toggler,
                  array,
                  query, 
                  dom, 
                  domc, 
                  on, 
                  mouse,
                  domConstruct,
                  style,
                  html) {

            var toggler = new Toggler({
                node: dom.byId("links")
            });

            var linkId = query('#link-id').text();
            var valid = IsValid(settings.link);
            var ingame = settings.link.indexOf(linkId) == 0;

            array.forEach(feats, function (e, i) {
                var innerDiv = query('div#feat-planner table').at(e.tree - 1).query('tr').at(e.row).query('td').at(e.column - 1).query('div.fh')[0];

                 if (ingame) {
                    e.usedPoints = 0;

                    if (valid) {                // init only when valid
                        var featVals = GetChoppedIngameLink(settings.link)
                        array.forEach(featVals, function(fe) {
                            if (fe.indexOf(e.RawId()) == 0) {
                                var toAdd = parseInt(fe.substring(fe.length - 1, fe.length)) + 1;
                                e.usedPoints = toAdd;
                            }
                        });
                    }
                } else {
                    e.usedPoints = 0;

                    if (settings.link != "" && valid) {
                        var numb = new Number(settings.link[i]);
                        if (!isNaN(numb) && numb >= 0 && numb <= 5)
                            e.usedPoints = numb;
                    }
                }

                innerDiv.id = i;
                
                on(innerDiv, mouse.enter, ShowDescription);
                on(innerDiv, mouse.leave, HideDescription);
                on(innerDiv, 'click', LeftClick);
                on(innerDiv, 'contextmenu', RightClick);


                innerDiv.innerHTML = FeatCellCode(e);
                if (e.parent != null) 
                    domConstruct.place(GetArrowCode(e), innerDiv, 'after');

                domConstruct.place(GetPointsCode(e), innerDiv, 'after');
            });

            if (!valid) {
                dom.byId('flash').innerHTML = '*Provided build link is invalid* - ';
            }

            query('#feat-planner-container').after('<div id="feat-description"></div>');

            SetupZeroClipboard();
            SetupSelectionOnLink();
            SetupButtonHighlight();
            
            var chars = ['&nbsp;▼', '&nbsp;▲'];
            on(dom.byId('link-toggle'), 'click', function(e) {
                var opacity = style.get(dom.byId("links"), 'opacity');
                if (opacity == '0') {
                    style.set(dom.byId('links'), 'display', 'block');
                    toggler.show(); 
                    html.set(dom.byId('link-toggle-arrow'), chars[0]);
                } else {
                    toggler.hide();
                    style.set(dom.byId('links'), 'display', 'none');
                    html.set(dom.byId('link-toggle-arrow'), chars[1]);
                }

                /*
                clip2.reposition();
                clip3.reposition();
                clip4.reposition();
                */
            });

            on (dom.byId('getsurl'), 'click', function() {
                require(["dojo/request/xhr", "dojo/dom-class"], function(xhr, domClass) {
                    domClass.add(dom.byId('linksurl'), 'linksurl');
                    xhr(settings.shorten + encodeURI(dom.byId('linkurl').value), { 
                        handleAs:"json" 
                    }).then(
                    // success
                    function(data) {
                        dom.byId('linksurl').value = data["shorturl"];
                        domClass.remove(dom.byId('linksurl'), 'linksurl');
                    },
                    //error
                    function(err) {
                        domClass.remove(dom.byId('linksurl'), 'linksurl');
                    });
                });
            });

            // initialize locked status
            _locked = TotalUsedPoints() != 0;
            if (_locked) {
                LockBuild(dom.byId('lock-button'));                
            }

            on(dom.byId('lock-button'), 'click', function(e) { 
                if (_locked) {
                    UnlockBuild(e.target);
                } else {
                    LockBuild(e.target);
                }
            });

            on(dom.byId('clear-button'), 'click', function() { Clear(); });
            query('#clear-tree1, #clear-tree2, #clear-tree3').on('click', function(e) {
                if (e.target.id == 'clear-tree1') {
                    Clear(1);
                } else if (e.target.id == 'clear-tree2') {
                    Clear(2);
                } else if (e.target.id == 'clear-tree3') {
                    Clear(3);
                }
            });


            ShowPoints();
            CheckImages();
            CreateLink();
        });
    }

    var UnlockBuild = function(node) {
        require(['dojo/dom-style'], function(style) {
            node.innerHTML = 'Lock Build';
            style.set(node, 'backgroundPosition', '5px 5px');
            _locked = false;
        });
    }

    var LockBuild = function(node) {
        require(['dojo/dom-style'], function(style) {
            node.innerHTML = 'Unlock Build';
            style.set(node, 'backgroundPosition', '-152px 5px');
            _locked = true;
        });
    }

    return {
        Initialize:function (load) {
            Initialize(load);
        }
    }
}
