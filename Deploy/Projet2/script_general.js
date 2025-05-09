(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.MapViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"class":"Player","minHeight":0,"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","scrollBarMargin":2,"gap":10,"backgroundColor":["#FFFFFF"],"data":{"history":{},"locales":{"en":"locale/en.txt"},"displayTooltipInTouchScreens":true,"defaultLocale":"en","name":"Player741","textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false}},"start":"this.init()","hash": "db8ae1e006561cfe169fec423dd0b1c387ba0ed4a42fb1644a9ea6f5a1317614", "definitions": [{"overlays":["this.overlay_A15CC3B9_B66F_973B_41CF_6CF77C130C7D","this.overlay_A8767F45_B669_AF4B_41E5_2C5453C813A7"],"hfovMax":130,"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_t.webp","cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_0/{face}/0/{row}_{column}.webp","rowCount":5,"colCount":30,"height":2560,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":9216,"url":"media/panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_0/{face}/1/{row}_{column}.webp","rowCount":3,"colCount":18,"height":1536,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":6144,"url":"media/panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_0/{face}/2/{row}_{column}.webp","rowCount":2,"colCount":12,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":3072,"url":"media/panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_0/{face}/3/{row}_{column}.webp","rowCount":1,"colCount":6,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}]}}],"hfov":360,"id":"panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018","vfov":180,"thumbnailUrl":"media/panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_t.webp","data":{"label":"AdobeStock_249823850"},"hfovMin":"120%","label":trans('panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018.label')},{"initialSequence":"this.sequence_A574BFFE_B669_EF39_41B2_EA462A79863C","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"class":"PanoramaCamera","id":"panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_camera"},{"class":"ImageResource","levels":["this.imlevel_96D3844F_B669_9157_41C3_5872738D403F"],"id":"ImageResource_AFDA619A_B678_B3F9_41C3_09664DE028FA"},{"model":"this.res_BD91E8A7_B659_91D7_41E3_8FF4D1DABBBE","class":"Model3D","floorRadius":981.16,"autoplay":true,"camera":"this.cam_BD81D95F_B659_9377_41E5_3CA0E4DFB67E","surfaceReticleMinRadius":15,"environmentURL":"media/model_BD9D08A6_B659_91C9_41CD_3B70184F5C36/bg_BDB8D961_B659_934B_41C1_720842586D6F.jpg","id":"model_BD9D08A6_B659_91C9_41CD_3B70184F5C36","thumbnailUrl":"media/model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_t.jpg","loop":true,"backgroundColor":"#333333","data":{"showOnlyHotspotsLineSightInPanoramas":true,"label":"industrial_machine","showOnlyHotspotsLineSight":true,"keepModel3DLoadedWithoutLocation":true},"floorOpacity":0.26,"receiveShadow":true,"sphericalHarmonicsMaxDegree":3,"castShadow":true,"antialiasingLevel":0.3,"lights":["this.light_BD847960_B659_9349_41D0_5DA0E0ED9DD5","this.light_BDBB1960_B659_9349_41E4_2AEAEC9D04F4"],"surfaceSelectionCoef":2,"objects":["this.model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_4","this.model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_7","this.model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_8","this.model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_11","this.model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_12","this.sprite_A1674EAC_B66B_91D9_41DF_D40265061B96","this.sprite_AD6EE77C_B679_9F3A_41C7_4BAD9C1D72D3"],"surfaceReticleRadius":0.02,"surfaceReticleMaxRadius":50,"label":trans('model_BD9D08A6_B659_91C9_41CD_3B70184F5C36.label'),"floorColor":"transparent"},{"aaEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","keepModel3DLoadedWithoutLocation":true},{"class":"PlayList","items":["this.PanoramaPlayListItem_96B0C585_B669_93CB_41E0_34257CBADDC6","this.Model3DPlayListItem_96B05585_B669_93CB_41B9_EBDAAA9F1328"],"id":"mainPlayList"},{"class":"FadeInEffect","easing":"cubic_in","id":"FadeInEffect_AFD9819A_B678_B3F9_41D6_90377A9C5F9F","duration":500},{"class":"Model3DPlayer","viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer"},{"subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarHeight":10,"playbackBarHeadWidth":6,"subtitlesGap":0,"minWidth":1,"subtitlesBackgroundColor":"#000000","minHeight":1,"playbackBarProgressBorderSize":0,"progressBarBorderColor":"#000000","data":{"name":"Floorplan Viewer"},"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarRight":0,"subtitlesFontSize":"3vmin","toolTipShadowColor":"#333138","playbackBarProgressBorderRadius":0,"right":"0%","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","propagateClick":false,"vrThumbstickRotationStep":20,"progressBottom":10,"vrPointerColor":"#FFFFFF","progressBackgroundColor":["#000000"],"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":6,"toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","progressHeight":2,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":2,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderSize":0,"progressBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressBorderRadius":2,"class":"ViewerArea","progressLeft":"33%","playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"id":"MapViewer","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","playbackBarLeft":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","progressRight":"33%","toolTipPaddingBottom":4,"subtitlesBottom":10,"top":"0.49%","playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"playbackBarBottom":5,"toolTipPaddingTop":4,"height":"30.644%","toolTipFontSize":"1.11vmin","progressOpacity":0.7,"surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"width":"16.461%"},{"subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarHeight":10,"playbackBarHeadWidth":6,"minHeight":50,"subtitlesGap":0,"minWidth":100,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderSize":0,"progressBarBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarRight":0,"subtitlesFontSize":"3vmin","toolTipShadowColor":"#333138","playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","propagateClick":false,"vrThumbstickRotationStep":20,"progressBottom":10,"vrPointerColor":"#FFFFFF","progressBackgroundColor":["#000000"],"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":6,"progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressHeight":2,"progressBarBorderRadius":2,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontColor":"#606060","progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressBorderRadius":2,"class":"ViewerArea","progressLeft":"33%","playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"id":"MainViewer","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","playbackBarLeft":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","progressRight":"33%","toolTipPaddingBottom":4,"subtitlesBottom":50,"playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"playbackBarBottom":5,"height":"100%","toolTipFontSize":"1.11vmin","progressOpacity":0.7,"surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"width":"100%"},{"class":"FadeOutEffect","easing":"cubic_out","id":"FadeOutEffect_AFD9B19A_B678_B3F9_41CF_43F4108F1DAD","duration":500},{"class":"UIComponent","minWidth":0,"minHeight":0,"id":"veilPopupPanorama","left":0,"backgroundColor":["#000000"],"right":0,"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":350},"data":{"name":"UIComponent17018"},"backgroundColorRatios":[0],"propagateClick":false,"top":0,"backgroundOpacity":0.55,"bottom":0,"visible":false},{"scaleMode":"custom","class":"ZoomImage","minWidth":0,"minHeight":0,"id":"zoomImagePopupPanorama","left":0,"backgroundColor":[],"right":0,"data":{"name":"ZoomImage17019"},"backgroundColorRatios":[],"propagateClick":false,"top":0,"bottom":0,"visible":false},{"borderColor":"#000000","iconWidth":"100%","class":"CloseButton","fontColor":"#FFFFFF","pressedIconColor":"#888888","minWidth":0,"minHeight":0,"id":"closeButtonPopupPanorama","iconColor":"#000000","fontFamily":"Arial","fontSize":"1.29vmin","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"data":{"name":"CloseButton17020"},"iconHeight":"100%","right":10,"tabIndex":0,"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":350},"backgroundColorRatios":[0,0.09803921568627451,1],"propagateClick":false,"top":10,"rollOverIconColor":"#666666","visible":false,"layout":"horizontal","iconLineWidth":2},{"rollOverDisplay":true,"id":"overlay_A15CC3B9_B66F_973B_41CF_6CF77C130C7D","class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_A138E3E4_B66F_9749_41DD_47135FF664A1"],"enabledInCardboard":true,"items":[{"pitch":-12.04,"yaw":70.87,"distance":50,"class":"HotspotPanoramaOverlayImage","vfov":8.02,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"width":1041,"url":"media/panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_HS_ybgo1yxg.webp","height":178,"class":"ImageResourceLevel"}]},"hfov":44.49}],"useHandCursor":true,"data":{"label":"Polygon"}},{"id":"overlay_A8767F45_B669_AF4B_41E5_2C5453C813A7","class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_A855CF8A_B669_AFD9_41D3_6633E970E6BB"],"enabledInCardboard":true,"items":["this.HotspotPanoramaOverlayTextImage_A8723F41_B669_AF4B_41D5_B6A91D63159F"],"useHandCursor":true,"data":{"label":"Text"}},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_A574BFFE_B669_EF39_41B2_EA462A79863C"},{"width":512,"url":trans('imlevel_96D3844F_B669_9157_41C3_5872738D403F.url'),"height":512,"class":"ImageResourceLevel","id":"imlevel_96D3844F_B669_9157_41C3_5872738D403F"},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_BD9D08A6_B659_91C9_41CD_3B70184F5C36/scene.glb"}],"class":"Model3DResource","id":"res_BD91E8A7_B659_91D7_41E3_8FF4D1DABBBE"},{"doubleClickAction":"none","class":"OrbitModel3DCamera","maxPitch":0,"minX":-163.83,"initialX":16.84,"minPitch":-90,"maxX":153.7,"initialY":41.94,"initialZ":4.44,"minY":-194.53,"id":"cam_BD81D95F_B659_9377_41E5_3CA0E4DFB67E","maxZ":377.34,"initialYaw":-50.32,"vrEnabled":true,"initialPitch":-15.28,"minZ":-327.4,"maxY":272.73,"autoNearFar":true,"maxDistance":1611.73,"initialDistance":201.47,"minDistance":201.47},{"pitch":45,"yaw":-45,"class":"OrbitLight","shadowTolerance":2,"castShadow":true,"id":"light_BD847960_B659_9349_41D0_5DA0E0ED9DD5"},{"pitch":75,"yaw":135,"class":"OrbitLight","shadowTolerance":2,"castShadow":true,"intensity":0.3,"id":"light_BDBB1960_B659_9349_41E4_2AEAEC9D04F4"},{"data":{"label":"part1a_part1_0"},"objectId":"4","class":"InnerModel3DObject","rollOverEnabled":false,"useHandCursor":false,"id":"model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_4"},{"data":{"label":"part2a_part2_0"},"objectId":"7","class":"InnerModel3DObject","rollOverEnabled":false,"useHandCursor":false,"id":"model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_7"},{"data":{"label":"part2a_part2_0"},"objectId":"8","class":"InnerModel3DObject","rollOverEnabled":false,"useHandCursor":false,"id":"model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_8"},{"data":{"label":"part3a_part2_0"},"objectId":"11","class":"InnerModel3DObject","rollOverEnabled":false,"useHandCursor":false,"id":"model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_11"},{"data":{"label":"part3a_part2_0"},"objectId":"12","class":"InnerModel3DObject","rollOverEnabled":false,"useHandCursor":false,"id":"model_BD9D08A6_B659_91C9_41CD_3B70184F5C36_12"},{"enabledInVR":false,"class":"SpriteModel3DObject","translationX":0.59,"translationZ":0.81,"data":{"label":"Image"},"parentId":"4","depthTest":false,"x":27.575263001230212,"transparentAreaActive":true,"id":"sprite_A1674EAC_B66B_91D9_41DF_D40265061B96","y":-45.216859200084414,"translationLength":0,"z":52.981911606917706,"useHandCursor":false,"image":"this.AnimatedImageResource_96B3C4A7_B669_91D7_41D6_7DE0886E74A8","width":40,"height":40,"click":"this.showPopupImage(this.ImageResource_AFDA619A_B678_B3F9_41C3_09664DE028FA,null,'90%','90%',this.FadeInEffect_AFD9819A_B678_B3F9_41D6_90377A9C5F9F,this.FadeOutEffect_AFD9B19A_B678_B3F9_41CF_43F4108F1DAD,{'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':2,'pressedIconHeight':20,'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderSize':0,'borderRadius':0,'pressedBorderSize':0,'pressedIconLineWidth':2,'iconColor':'#000000','backgroundOpacity':1,'rollOverIconHeight':20,'pressedBackgroundColorDirection':'vertical','iconWidth':20,'borderSize':0,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','pressedIconWidth':20,'pressedBorderColor':'#000000','pressedBackgroundOpacity':1,'rollOverIconLineWidth':2,'rollOverBackgroundOpacity':1,'iconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorDirection':'vertical'},null,null,false)"},{"class":"SpriteModel3DObject","translationX":1,"data":{"tags":["Revenir"],"label":"Arrow Blue Left"},"parentId":"4","depthTest":false,"x":33.506141662597685,"transparentAreaActive":true,"toolTip":trans('sprite_AD6EE77C_B679_9F3A_41C7_4BAD9C1D72D3.toolTip'),"y":-52.22993351351441,"translationLength":0,"z":-1.126047861163796,"id":"sprite_AD6EE77C_B679_9F3A_41C7_4BAD9C1D72D3","anchorX":1,"useHandCursor":false,"image":"this.res_9610E391_B66B_B7CB_41BF_EA1614627623","anchorY":0,"height":60,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_96B0C585_B669_93CB_41E0_34257CBADDC6, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","width":60},{"media":"this.panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A2B35592_B669_F3C9_41CA_2DE684B3E018_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_96B0C585_B669_93CB_41E0_34257CBADDC6"},{"media":"this.model_BD9D08A6_B659_91C9_41CD_3B70184F5C36","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer","id":"Model3DPlayListItem_96B05585_B669_93CB_41B9_EBDAAA9F1328"},{"mapColor":"image","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_96B05585_B669_93CB_41B9_EBDAAA9F1328, {\"y\":41.94053,\"z\":4.44092,\"distance\":201.47,\"pitch\":-15.28,\"x\":16.84245,\"yaw\":-50.32}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_A138E3E4_B66F_9749_41DD_47135FF664A1","toolTip":trans('HotspotPanoramaOverlayArea_A138E3E4_B66F_9749_41DD_47135FF664A1.toolTip')},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_A855CF8A_B669_AFD9_41D3_6633E970E6BB","displayTooltipInTouchScreens":true},{"distance":50,"class":"HotspotPanoramaOverlayImage","image":{"class":"ImageResource","levels":["this.imlevel_961EA45E_B66B_B179_41DA_6E20C66BF4EC"]},"hfov":19.74,"pitch":-13.05,"vfov":5.31,"yaw":73.2,"data":{"label":"Text"},"id":"HotspotPanoramaOverlayTextImage_A8723F41_B669_AF4B_41D5_B6A91D63159F"},{"levels":[{"width":320,"url":"media/res_AD21AC39_B679_B13B_41D5_EFCC9ED3E158_0.webp","height":480,"class":"ImageResourceLevel"}],"colCount":4,"class":"AnimatedImageResource","rowCount":6,"frameCount":24,"finalFrame":"first","frameDuration":41,"id":"AnimatedImageResource_96B3C4A7_B669_91D7_41D6_7DE0886E74A8"},{"class":"ImageResource","levels":[{"width":119,"url":"media/res_9610E391_B66B_B7CB_41BF_EA1614627623_0.webp","height":119,"class":"ImageResourceLevel"}],"id":"res_9610E391_B66B_B7CB_41BF_EA1614627623"},{"width":877.27,"url":trans('imlevel_961EA45E_B66B_B179_41DA_6E20C66BF4EC.url'),"height":233.78,"class":"ImageResourceLevel","id":"imlevel_961EA45E_B66B_B179_41DA_6E20C66BF4EC"}],"backgroundColorRatios":[0],"propagateClick":false,"scripts":{"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"clone":TDV.Tour.Script.clone,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"openLink":TDV.Tour.Script.openLink,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"getPixels":TDV.Tour.Script.getPixels,"registerKey":TDV.Tour.Script.registerKey,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"existsKey":TDV.Tour.Script.existsKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"enableVR":TDV.Tour.Script.enableVR,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setValue":TDV.Tour.Script.setValue,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeJS":TDV.Tour.Script.executeJS,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizFinish":TDV.Tour.Script.quizFinish,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"disableVR":TDV.Tour.Script.disableVR,"shareSocial":TDV.Tour.Script.shareSocial,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"init":TDV.Tour.Script.init,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"toggleVR":TDV.Tour.Script.toggleVR,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizStart":TDV.Tour.Script.quizStart,"historyGoBack":TDV.Tour.Script.historyGoBack,"playAudioList":TDV.Tour.Script.playAudioList,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getComponentByName":TDV.Tour.Script.getComponentByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"downloadFile":TDV.Tour.Script.downloadFile,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"createTween":TDV.Tour.Script.createTween,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"translate":TDV.Tour.Script.translate,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setLocale":TDV.Tour.Script.setLocale,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements},"width":"100%","height":"100%","layout":"absolute","scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Fri May 9 2025