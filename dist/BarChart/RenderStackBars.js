var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { View, TouchableOpacity, Text, LayoutAnimation, Platform, UIManager, } from 'react-native';
import Svg, { Defs, Rect } from 'react-native-svg';
import LinearGradient from '../Components/common/LinearGradient';
import { useRenderStackBars, BarDefaults, } from 'gifted-charts-core';
import Tooltip from '../Components/BarSpecificComponents/tooltip';
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
}
var RenderStackBars = function (props) {
    var _a;
    var barBackgroundPattern = props.barBackgroundPattern, patternId = props.patternId, item = props.item, index = props.index, containerHeight = props.containerHeight, spacing = props.spacing, rotateLabel = props.rotateLabel, label = props.label, labelTextStyle = props.labelTextStyle, xAxisTextNumberOfLines = props.xAxisTextNumberOfLines, xAxisLabelsVerticalShift = props.xAxisLabelsVerticalShift, renderTooltip = props.renderTooltip, selectedIndex = props.selectedIndex, setSelectedIndex = props.setSelectedIndex, activeOpacity = props.activeOpacity, _b = props.animationDuration, animationDuration = _b === void 0 ? BarDefaults.animationDuration : _b, barBorderWidth = props.barBorderWidth, barBorderColor = props.barBorderColor, stackBorderRadius = props.stackBorderRadius, stackBorderTopLeftRadius = props.stackBorderTopLeftRadius, stackBorderTopRightRadius = props.stackBorderTopRightRadius, stackBorderBottomLeftRadius = props.stackBorderBottomLeftRadius, stackBorderBottomRightRadius = props.stackBorderBottomRightRadius, showValuesAsTopLabel = props.showValuesAsTopLabel, _c = props.autoShiftLabelsForNegativeStacks, autoShiftLabelsForNegativeStacks = _c === void 0 ? true : _c, _d = props.labelsDistanceFromXaxis, labelsDistanceFromXaxis = _d === void 0 ? 0 : _d, horizontal = props.horizontal;
    var _e = useRenderStackBars(props), containsNegativeValue = _e.containsNegativeValue, noAnimation = _e.noAnimation, localBarInnerComponent = _e.localBarInnerComponent, borderRadius = _e.borderRadius, borderTopLeftRadius = _e.borderTopLeftRadius, borderTopRightRadius = _e.borderTopRightRadius, borderBottomLeftRadius = _e.borderBottomLeftRadius, borderBottomRightRadius = _e.borderBottomRightRadius, disablePress = _e.disablePress, totalHeight = _e.totalHeight, height = _e.height, setHeight = _e.setHeight, getBarHeight = _e.getBarHeight, getPosition = _e.getPosition, lowestBarPosition = _e.lowestBarPosition, getStackBorderRadii = _e.getStackBorderRadii, tooltipProps = _e.tooltipProps;
    var renderLabel = function (label, labelTextStyle) {
        return (_jsx(View, { style: [
                {
                    width: (item.labelWidth ||
                        props.labelWidth ||
                        item.stacks[0].barWidth ||
                        props.barWidth ||
                        30) +
                        spacing / 2,
                    position: 'absolute',
                    bottom: autoShiftLabelsForNegativeStacks
                        ? -6 - xAxisTextNumberOfLines * 18 + lowestBarPosition
                        : -labelsDistanceFromXaxis,
                },
                rotateLabel
                    ? horizontal
                        ? { transform: [{ rotate: '330deg' }] }
                        : { transform: [{ rotate: '60deg' }] }
                    : horizontal
                        ? { transform: [{ rotate: '-90deg' }] }
                        : {},
            ], children: item.labelComponent ? (item.labelComponent()) : (_jsx(Text, { style: [labelTextStyle], numberOfLines: xAxisTextNumberOfLines, children: label || '' })) }));
    };
    useEffect(function () {
        if (!noAnimation) {
            layoutAppear();
        }
    }, [totalHeight]);
    var elevate = function () {
        LayoutAnimation.configureNext({
            duration: animationDuration,
            update: { type: 'linear', property: 'scaleXY' },
        });
        setHeight(totalHeight);
    };
    var layoutAppear = function () {
        LayoutAnimation.configureNext({
            duration: Platform.OS == 'ios' ? animationDuration : 20,
            create: { type: 'linear', property: 'opacity' },
            update: { type: 'linear', property: 'scaleXY' },
        });
        setTimeout(function () { return elevate(); }, Platform.OS == 'ios' ? 10 : 100);
    };
    var static2DSimple = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (_jsxs(_Fragment, { children: [_jsxs(TouchableOpacity, { disabled: disablePress, activeOpacity: activeOpacity, onPress: function () {
                        setSelectedIndex(index);
                        if (item.onPress) {
                            item.onPress();
                        }
                        else if (props.onPress) {
                            props.onPress(item, index);
                        }
                    }, onLongPress: function () {
                        if (item.onLongPress) {
                            item.onLongPress();
                        }
                        else if (props.onLongPress) {
                            props.onLongPress(item, index);
                        }
                    }, onPressOut: function () {
                        if (item.onPressOut) {
                            item.onPressOut();
                        }
                        else if (props.onPressOut) {
                            props.onPressOut(item, index);
                        }
                    }, style: [
                        {
                            position: 'absolute',
                            width: item.stacks[0].barWidth || props.barWidth || 30,
                            height: '100%',
                            borderTopLeftRadius: (_b = (_a = borderTopLeftRadius !== null && borderTopLeftRadius !== void 0 ? borderTopLeftRadius : borderRadius) !== null && _a !== void 0 ? _a : stackBorderTopLeftRadius) !== null && _b !== void 0 ? _b : stackBorderRadius,
                            borderTopRightRadius: (_d = (_c = borderTopRightRadius !== null && borderTopRightRadius !== void 0 ? borderTopRightRadius : borderRadius) !== null && _c !== void 0 ? _c : stackBorderTopRightRadius) !== null && _d !== void 0 ? _d : stackBorderRadius,
                            borderBottomLeftRadius: (_f = (_e = borderBottomLeftRadius !== null && borderBottomLeftRadius !== void 0 ? borderBottomLeftRadius : borderRadius) !== null && _e !== void 0 ? _e : stackBorderBottomLeftRadius) !== null && _f !== void 0 ? _f : stackBorderRadius,
                            borderBottomRightRadius: (_h = (_g = borderBottomRightRadius !== null && borderBottomRightRadius !== void 0 ? borderBottomRightRadius : borderRadius) !== null && _g !== void 0 ? _g : stackBorderBottomRightRadius) !== null && _h !== void 0 ? _h : stackBorderRadius,
                            overflow: lowestBarPosition ? 'visible' : 'hidden',
                        },
                    ], children: [item.stacks.map(function (stackItem, index) {
                            var borderRadii = getStackBorderRadii(item, index);
                            var barHeight = getBarHeight(stackItem.value, stackItem.marginBottom);
                            return (_jsxs(TouchableOpacity, { onPress: stackItem.onPress, activeOpacity: activeOpacity, disabled: disablePress || !stackItem.onPress, style: __assign({ position: 'absolute', bottom: getPosition(index) + (stackItem.marginBottom || 0), width: '100%', height: barHeight, backgroundColor: stackItem.color || item.color || props.color || 'black', borderWidth: barBorderWidth !== null && barBorderWidth !== void 0 ? barBorderWidth : 0, borderColor: barBorderColor }, borderRadii), children: [stackItem.showGradient ||
                                        item.showGradient ||
                                        props.showGradient ? (_jsx(LinearGradient, { style: __assign({ position: 'absolute', width: '100%', height: '100%' }, borderRadii), start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: [
                                            stackItem.gradientColor ||
                                                item.gradientColor ||
                                                props.gradientColor ||
                                                'white',
                                            stackItem.color || item.color || props.color || 'black',
                                        ] })) : null, stackItem.innerBarComponent && stackItem.innerBarComponent()] }, index));
                        }), (item.barBackgroundPattern || barBackgroundPattern) && (_jsxs(Svg, { children: [_jsx(Defs, { children: item.barBackgroundPattern
                                        ? item.barBackgroundPattern()
                                        : barBackgroundPattern === null || barBackgroundPattern === void 0 ? void 0 : barBackgroundPattern() }), _jsx(Rect, { stroke: "transparent", x: "1", y: "1", width: "100%", height: "100%", fill: "url(#".concat(item.patternId || patternId, ")") })] }))] }), localBarInnerComponent ? (_jsx(View, { style: { height: '100%', width: '100%' }, children: localBarInnerComponent(item, index) })) : null, (item.topLabelComponent || showValuesAsTopLabel) && (_jsx(View, { style: [
                        {
                            position: 'absolute',
                            top: containsNegativeValue
                                ? 0
                                : (item.barWidth || props.barWidth || 30) * -1,
                            height: item.barWidth || props.barWidth || 30,
                            width: item.barWidth || props.barWidth || 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        containsNegativeValue && {
                            transform: [{ translateY: totalHeight * 2 }],
                        },
                        horizontal &&
                            !props.intactTopLabel && { transform: [{ rotate: '270deg' }] },
                        item.topLabelContainerStyle,
                    ], children: showValuesAsTopLabel ? (_jsx(Text, { style: (_j = item.topLabelTextStyle) !== null && _j !== void 0 ? _j : props.topLabelTextStyle, children: item.stacks.reduce(function (acc, stack) { return acc + stack.value; }, 0) })) : ((_k = item.topLabelComponent) === null || _k === void 0 ? void 0 : _k.call(item)) }))] }));
    };
    var barWrapper = function () {
        return noAnimation ? (static2DSimple()) : (_jsx(View, { style: {
                position: 'absolute',
                bottom: 0,
                height: height,
                width: '100%',
                overflow: 'hidden',
            }, children: static2DSimple() }));
    };
    return (_jsxs(_Fragment, { children: [_jsxs(View, { pointerEvents: props.pointerConfig
                    ? ((_a = props.pointerConfig.pointerEvents) !== null && _a !== void 0 ? _a : 'none')
                    : 'auto', style: [
                    {
                        // overflow: 'visible',
                        marginBottom: 60 + xAxisLabelsVerticalShift,
                        width: item.stacks[0].barWidth || props.barWidth || 30,
                        height: totalHeight,
                        marginRight: spacing,
                    },
                    props.pointerConfig
                        ? {
                            transform: [
                                {
                                    translateY: (containerHeight || 200) -
                                        (totalHeight - 10 + xAxisLabelsVerticalShift),
                                },
                            ],
                        }
                        : null,
                ], children: [(props.showXAxisIndices || item.showXAxisIndex) && (_jsx(View, { style: {
                            zIndex: 2,
                            position: 'absolute',
                            height: props.xAxisIndicesHeight,
                            width: props.xAxisIndicesWidth,
                            bottom: props.xAxisIndicesHeight / -2,
                            left: ((item.barWidth || props.barWidth || 30) -
                                props.xAxisIndicesWidth) /
                                2,
                            backgroundColor: props.xAxisIndicesColor,
                        } })), barWrapper(), renderLabel(label || '', labelTextStyle)] }), renderTooltip && selectedIndex === index && (_jsx(Tooltip, __assign({}, tooltipProps)))] }));
};
export default RenderStackBars;
