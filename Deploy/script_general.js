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
var script = {"children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","minHeight":0,"minWidth":0,"scrollBarMargin":2,"id":"rootPlayer","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false},"defaultLocale":"en","history":{},"name":"Player433","displayTooltipInTouchScreens":true},"gap":10,"backgroundColor":["#FFFFFF"],"hash": "fa2570d05cd513685b7902ce952ad7adc60d41f9bedef8ce79a896088e9f340c", "definitions": [{"items":[{"camera":"this.panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11_camera","media":"this.panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"height":"100%","class":"ViewerArea","toolTipPaddingTop":4,"minHeight":50,"playbackBarHeight":10,"playbackBarHeadWidth":6,"minWidth":100,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderSize":0,"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","toolTipFontSize":"1.11vmin","playbackBarRight":0,"subtitlesFontSize":"3vmin","playbackBarProgressBorderRadius":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","progressBottom":10,"progressHeight":2,"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"subtitlesFontColor":"#FFFFFF","toolTipBorderColor":"#767676","progressBorderSize":0,"progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":2,"playbackBarBorderColor":"#FFFFFF","propagateClick":false,"playbackBarBorderRadius":0,"firstTransitionDuration":0,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","progressBorderRadius":2,"toolTipPaddingRight":6,"id":"MainViewer","playbackBarHeadBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowBlurRadius":3,"progressLeft":"33%","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorRatios":[0],"progressRight":"33%","toolTipFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadow":true,"subtitlesBottom":50,"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"subtitlesTop":0,"toolTipPaddingBottom":4,"subtitlesTextShadowVerticalLength":1,"progressOpacity":0.7},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","initialSequence":"this.sequence_BB1E4972_B180_129E_41E2_DCBB971114B0","enterPointingToHorizon":true,"id":"panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11_camera"},{"class":"Panorama","vfov":180,"overlays":["this.overlay_A1FAA279_B180_368D_41E2_2F941393984D","this.overlay_A3AF55ED_B180_7D8A_41D3_D72AEAC2C46D","this.overlay_A3854FAA_B180_0D8E_41C2_04B3BA0E7C0F"],"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11_t.webp","cube":{"levels":[{"width":9216,"url":"media/panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":3,"height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"id":"panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11","thumbnailUrl":"media/panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11_t.webp","hfovMin":"150%","data":{"label":"boiler_room_4k"},"label":trans('panorama_BA1BCFD1_B180_0D9D_41D2_929161225E11.label'),"hfov":360},{"viewerArea":"this.MainViewer","class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_BB1E4972_B180_129E_41E2_DCBB971114B0"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","items":["this.QuadHotspotPanoramaOverlayTextImage_A1FB4278_B180_368B_41C4_DC25729F6DAF"],"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_A109D280_B180_367A_41B7_FC588CC1E4D2"],"useHandCursor":true,"id":"overlay_A1FAA279_B180_368D_41E2_2F941393984D"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","items":[{"pitch":7.23,"yaw":14.47,"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"www.promixgardening.com-12830775923683852"},"scaleMode":"fit_inside","image":"this.res_A3C6DC9D_B180_138A_41E4_7A657CDE706A","hfov":10.5,"vfov":10.5}],"data":{"label":"www.promixgardening.com-12830775923683852"},"areas":["this.HotspotPanoramaOverlayArea_A3AD05EF_B180_7D86_41DC_49691175BA9A"],"useHandCursor":true,"id":"overlay_A3AF55ED_B180_7D8A_41D3_D72AEAC2C46D"},{"class":"DustPanoramaOverlay","intensity":0.25,"id":"overlay_A3854FAA_B180_0D8E_41C2_04B3BA0E7C0F","color":"#FFFFFF"},{"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"pitch":19.34,"yaw":6.59,"class":"PanoramaPoint"},{"pitch":17.61,"yaw":24.06,"class":"PanoramaPoint"},{"pitch":10.81,"yaw":24.06,"class":"PanoramaPoint"},{"pitch":11.82,"yaw":6.6,"class":"PanoramaPoint"}],"distance":50,"image":{"levels":["this.imlevel_A3CB1D5F_B180_1286_41DB_49B5957B03E3"],"class":"ImageResource"},"id":"QuadHotspotPanoramaOverlayTextImage_A1FB4278_B180_368B_41C4_DC25729F6DAF","data":{"label":"Text"}},{"displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_A109D280_B180_367A_41B7_FC588CC1E4D2","class":"HotspotPanoramaOverlayArea"},{"levels":[{"width":168,"url":"media/res_A3C6DC9D_B180_138A_41E4_7A657CDE706A_0.webp","height":168,"class":"ImageResourceLevel"}],"id":"res_A3C6DC9D_B180_138A_41E4_7A657CDE706A","class":"ImageResource"},{"displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_A3AD05EF_B180_7D86_41DC_49691175BA9A","class":"HotspotPanoramaOverlayArea"},{"width":408.83,"url":trans('imlevel_A3CB1D5F_B180_1286_41DB_49B5957B03E3.url'),"class":"ImageResourceLevel","height":168.52,"id":"imlevel_A3CB1D5F_B180_1286_41DB_49B5957B03E3"}],"scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"clone":TDV.Tour.Script.clone,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlays":TDV.Tour.Script.getOverlays,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizShowScore":TDV.Tour.Script.quizShowScore,"openLink":TDV.Tour.Script.openLink,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPixels":TDV.Tour.Script.getPixels,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizStart":TDV.Tour.Script.quizStart,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"setValue":TDV.Tour.Script.setValue,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"init":TDV.Tour.Script.init,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"mixObject":TDV.Tour.Script.mixObject,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleVR":TDV.Tour.Script.toggleVR,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"registerKey":TDV.Tour.Script.registerKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"enableVR":TDV.Tour.Script.enableVR,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"getComponentByName":TDV.Tour.Script.getComponentByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"existsKey":TDV.Tour.Script.existsKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"disableVR":TDV.Tour.Script.disableVR,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setLocale":TDV.Tour.Script.setLocale,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements},"start":"this.init()","backgroundColorRatios":[0],"layout":"absolute","width":"100%","propagateClick":false,"height":"100%","scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Thu May 8 2025