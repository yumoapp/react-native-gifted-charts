var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { View, LayoutAnimation, Platform, UIManager, Text } from 'react-native';
import Svg, { Defs, Rect } from 'react-native-svg';
import Cap from '../Components/BarSpecificComponents/cap';
import LinearGradient from '../Components/common/LinearGradient';
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
}
var Animated2DWithGradient = function (props) {
    var _a;
    var barBackgroundPattern = props.barBackgroundPattern, patternId = props.patternId, barWidth = props.barWidth, barStyle = props.barStyle, item = props.item, index = props.index, opacity = props.opacity, animationDuration = props.animationDuration, noGradient = props.noGradient, noAnimation = props.noAnimation, barMarginBottom = props.barMarginBottom, barInnerComponent = props.barInnerComponent, intactTopLabel = props.intactTopLabel, showValuesAsTopLabel = props.showValuesAsTopLabel, topLabelContainerStyle = props.topLabelContainerStyle, topLabelTextStyle = props.topLabelTextStyle, commonStyleForBar = props.commonStyleForBar, barStyleWithBackground = props.barStyleWithBackground, yAxisOffset = props.yAxisOffset;
    var _b = __read(useState(noAnimation ? props.height : 0.2), 2), height = _b[0], setHeight = _b[1];
    var _c = __read(useState(!noAnimation), 2), initialRender = _c[0], setInitialRender = _c[1];
    useEffect(function () {
        if (!noAnimation) {
            if (initialRender) {
                setTimeout(function () { return layoutAppear(); }, 20);
            }
            else {
                elevate();
            }
        }
        else {
            setHeight(props.height);
        }
    }, [props.height]);
    var elevate = function () {
        LayoutAnimation.configureNext({
            duration: animationDuration,
            update: { type: 'linear', property: 'scaleXY' },
        });
        setHeight(props.height);
    };
    var layoutAppear = function () {
        LayoutAnimation.configureNext({
            duration: Platform.OS == 'ios' ? animationDuration : 20,
            create: { type: 'linear', property: 'opacity' },
            update: { type: 'linear', property: 'scaleXY' },
        });
        setInitialRender(false);
        setTimeout(function () { return elevate(); }, Platform.OS == 'ios' ? 10 : 100);
    };
    return (_jsxs(_Fragment, { children: [!initialRender && (_jsx(View, { style: {
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    overflow: 'hidden',
                    height: (noAnimation
                        ? Math.max(props.minHeight, Math.abs(height))
                        : height) - (barMarginBottom || 0),
                }, children: _jsxs(View, { style: [
                        {
                            width: '100%',
                            height: (noAnimation
                                ? Math.max(props.minHeight, Math.abs(height))
                                : height) - (barMarginBottom || 0),
                        },
                        item.barStyle || barStyle,
                    ], children: [noGradient ? (_jsx(View, { style: barStyleWithBackground, children: props.cappedBars && item.value ? (_jsx(Cap, { capThicknessFromItem: item.capThickness, capThicknessFromProps: props.capThickness, capColorFromItem: item.capColor, capColorFromProps: props.capColor, capRadiusFromItem: item.capRadius, capRadiusFromProps: props.capRadius })) : null })) : (_jsx(LinearGradient, { style: commonStyleForBar, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, colors: [
                                item.gradientColor || props.gradientColor || 'white',
                                item.frontColor || props.frontColor || 'black',
                            ], children: props.cappedBars && (_jsx(View, { style: {
                                    position: 'absolute',
                                    width: '100%',
                                    height: item.capThickness === 0
                                        ? 0
                                        : item.capThickness || props.capThickness || 6,
                                    backgroundColor: item.capColor || props.capColor || 'black',
                                    borderTopLeftRadius: item.capRadius === 0
                                        ? 0
                                        : item.capRadius || props.capRadius || 0,
                                    borderTopRightRadius: item.capRadius === 0
                                        ? 0
                                        : item.capRadius || props.capRadius || 0,
                                } })) })), (item.barBackgroundPattern || barBackgroundPattern) && (_jsxs(Svg, { children: [_jsx(Defs, { children: item.barBackgroundPattern
                                        ? item.barBackgroundPattern()
                                        : barBackgroundPattern === null || barBackgroundPattern === void 0 ? void 0 : barBackgroundPattern() }), _jsx(Rect, { stroke: "transparent", x: "1", y: "1", width: item.barWidth || props.barWidth || 30, height: noAnimation ? Math.abs(height) : height, fill: "url(#".concat(item.patternId || patternId, ")") })] })), barInnerComponent ? (_jsx(View, { style: { height: '100%', width: '100%' }, children: barInnerComponent(item, index) })) : null] }) })), item.topLabelComponent || showValuesAsTopLabel ? (_jsx(View, { style: [
                    {
                        position: 'absolute',
                        top: (item.barWidth || barWidth || 30) * -1,
                        height: item.barWidth || barWidth || 30,
                        width: item.barWidth || barWidth || 30,
                        justifyContent: (props.horizontal && !intactTopLabel) || item.value < 0
                            ? 'center'
                            : 'flex-end',
                        alignItems: 'center',
                        opacity: opacity,
                    },
                    item.value < 0 && { transform: [{ rotate: '180deg' }] },
                    props.horizontal &&
                        !intactTopLabel && { transform: [{ rotate: '270deg' }] },
                    topLabelContainerStyle !== null && topLabelContainerStyle !== void 0 ? topLabelContainerStyle : item.topLabelContainerStyle,
                ], children: showValuesAsTopLabel ? (_jsx(Text, { style: topLabelTextStyle, children: item.value + yAxisOffset })) : ((_a = item.topLabelComponent) === null || _a === void 0 ? void 0 : _a.call(item)) })) : null] }));
};
export default Animated2DWithGradient;
