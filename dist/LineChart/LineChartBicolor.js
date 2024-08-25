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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Animated, Easing, Text } from 'react-native';
import { styles } from './styles';
import Svg, { Path, LinearGradient, Stop, Circle, Rect, Text as CanvasText, } from 'react-native-svg';
import BarAndLineChartsWrapper from '../Components/BarAndLineChartsWrapper';
import { useLineChartBiColor, } from 'gifted-charts-core';
import { screenWidth } from '../utils';
export var LineChartBicolor = function (props) {
    var _a;
    var scrollRef = useRef();
    // const heightValue = useMemo(() => new Animated.Value(0), []);
    var widthValue = useMemo(function () { return new Animated.Value(0); }, []);
    var opacityValue = useMemo(function () { return new Animated.Value(0); }, []);
    var _b = useLineChartBiColor(__assign(__assign({}, props), { parentWidth: (_a = props.parentWidth) !== null && _a !== void 0 ? _a : screenWidth })), pointsArray = _b.pointsArray, fillPointsArray = _b.fillPointsArray, selectedIndex = _b.selectedIndex, setSelectedIndex = _b.setSelectedIndex, containerHeight = _b.containerHeight, data = _b.data, labelsExtraHeight = _b.labelsExtraHeight, animationDuration = _b.animationDuration, startIndex1 = _b.startIndex1, endIndex1 = _b.endIndex1, initialSpacing = _b.initialSpacing, thickness = _b.thickness, spacing = _b.spacing, xAxisThickness = _b.xAxisThickness, dataPointsHeight1 = _b.dataPointsHeight1, dataPointsWidth1 = _b.dataPointsWidth1, dataPointsRadius1 = _b.dataPointsRadius1, dataPointsColor1 = _b.dataPointsColor1, dataPointsShape1 = _b.dataPointsShape1, areaChart = _b.areaChart, textFontSize1 = _b.textFontSize1, textColor1 = _b.textColor1, totalWidth = _b.totalWidth, maxValue = _b.maxValue, extendedContainerHeight = _b.extendedContainerHeight, getX = _b.getX, getY = _b.getY, stepHeight = _b.stepHeight, noOfSectionsBelowXAxis = _b.noOfSectionsBelowXAxis, thickness1 = _b.thickness1, zIndex = _b.zIndex, strokeDashArray1 = _b.strokeDashArray1, rotateLabel = _b.rotateLabel, isAnimated = _b.isAnimated, hideDataPoints1 = _b.hideDataPoints1, color = _b.color, colorNegative = _b.colorNegative, startFillColor = _b.startFillColor, endFillColor = _b.endFillColor, startOpacity = _b.startOpacity, endOpacity = _b.endOpacity, startFillColorNegative = _b.startFillColorNegative, endFillColorNegative = _b.endFillColorNegative, startOpacityNegative = _b.startOpacityNegative, endOpacityNegative = _b.endOpacityNegative, gradientDirection = _b.gradientDirection, xAxisTextNumberOfLines = _b.xAxisTextNumberOfLines, focusEnabled = _b.focusEnabled, showDataPointOnFocus = _b.showDataPointOnFocus, showStripOnFocus = _b.showStripOnFocus, showTextOnFocus = _b.showTextOnFocus, stripHeight = _b.stripHeight, stripWidth = _b.stripWidth, stripColor = _b.stripColor, stripOpacity = _b.stripOpacity, unFocusOnPressOut = _b.unFocusOnPressOut, delayBeforeUnFocus = _b.delayBeforeUnFocus, barAndLineChartsWrapperProps = _b.barAndLineChartsWrapperProps;
    var labelsAppear = useCallback(function () {
        opacityValue.setValue(0);
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    }, [opacityValue]);
    var appearingOpacity = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    var decreaseWidth = useCallback(function () {
        widthValue.setValue(0);
        Animated.timing(widthValue, {
            toValue: 1,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [animationDuration, widthValue]);
    useEffect(function () {
        decreaseWidth();
        labelsAppear();
    }, [animationDuration, decreaseWidth, labelsAppear]);
    var renderLabel = function (index, label, labelTextStyle, labelComponent) {
        return (_jsx(View, { style: [
                {
                    position: 'absolute',
                    bottom: 30,
                    zIndex: 10,
                    width: spacing + labelsExtraHeight,
                    left: index === 0 && initialSpacing < 10
                        ? getX(index) - spacing / 2 + 8
                        : getX(index) - spacing / 2,
                    justifyContent: 'center',
                },
                rotateLabel && { transform: [{ rotate: '60deg' }] },
            ], children: labelComponent ? (labelComponent()) : (_jsx(Text, { style: labelTextStyle || { textAlign: 'center' }, numberOfLines: xAxisTextNumberOfLines, children: label || '' })) }));
    };
    var renderAnimatedLabel = function (index, label, labelTextStyle, labelComponent) {
        return (_jsx(Animated.View, { style: [
                {
                    height: rotateLabel ? 40 : 20,
                    // backgroundColor: 'yellow',
                    position: 'absolute',
                    bottom: rotateLabel ? 10 : 30,
                    zIndex: 10,
                    width: spacing,
                    left: index === 0 && initialSpacing < 10
                        ? getX(index) - spacing / 2 + 8
                        : getX(index) - spacing / 2,
                    opacity: appearingOpacity,
                },
                rotateLabel && { transform: [{ rotate: '60deg' }] },
            ], children: labelComponent ? (labelComponent()) : (_jsx(Text, { style: labelTextStyle || { textAlign: 'center' }, numberOfLines: xAxisTextNumberOfLines, children: label || '' })) }));
    };
    var animatedWidth = widthValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, totalWidth],
    });
    var onStripPress = function (item, index) {
        setSelectedIndex(index);
        if (props.onFocus) {
            props.onFocus(item, index);
        }
    };
    var renderDataPoints = function (dataForRender, dataPtsShape, dataPtsWidth, dataPtsHeight, dataPtsColor, dataPtsRadius, textColor, textFontSize, startIndex, endIndex) {
        return dataForRender.map(function (item, index) {
            var _a, _b, _c;
            if (index < startIndex || index > endIndex)
                return null;
            if (item.hideDataPoint) {
                return null;
            }
            var dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, text, customDataPoint, dataPointLabelComponent;
            if (index === selectedIndex) {
                dataPointsShape =
                    item.focusedDataPointShape ||
                        props.focusedDataPointShape ||
                        item.dataPointShape ||
                        dataPtsShape;
                dataPointsWidth =
                    item.focusedDataPointWidth ||
                        props.focusedDataPointWidth ||
                        item.dataPointWidth ||
                        dataPtsWidth;
                dataPointsHeight =
                    item.focusedDataPointHeight ||
                        props.focusedDataPointHeight ||
                        item.dataPointHeight ||
                        dataPtsHeight;
                dataPointsColor =
                    item.focusedDataPointColor || props.focusedDataPointColor || 'orange';
                dataPointsRadius =
                    item.focusedDataPointRadius ||
                        props.focusedDataPointRadius ||
                        item.dataPointRadius ||
                        dataPtsRadius;
                if (showTextOnFocus) {
                    text = item.dataPointText;
                }
                customDataPoint =
                    item.focusedCustomDataPoint ||
                        props.focusedCustomDataPoint ||
                        item.customDataPoint ||
                        props.customDataPoint;
                dataPointLabelComponent =
                    item.focusedDataPointLabelComponent || item.dataPointLabelComponent;
            }
            else {
                dataPointsShape = item.dataPointShape || dataPtsShape;
                dataPointsWidth = item.dataPointWidth || dataPtsWidth;
                dataPointsHeight = item.dataPointHeight || dataPtsHeight;
                dataPointsColor = item.dataPointColor || dataPtsColor;
                dataPointsRadius = item.dataPointRadius || dataPtsRadius;
                if (showTextOnFocus) {
                    text = '';
                }
                customDataPoint = item.customDataPoint || props.customDataPoint;
                dataPointLabelComponent = item.dataPointLabelComponent;
            }
            var currentStripHeight = (_a = item.stripHeight) !== null && _a !== void 0 ? _a : stripHeight;
            var currentStripWidth = (_b = item.stripWidth) !== null && _b !== void 0 ? _b : stripWidth;
            var currentStripOpacity = (_c = item.stripOpacity) !== null && _c !== void 0 ? _c : stripOpacity;
            var currentStripColor = item.stripColor || stripColor;
            return (_jsxs(Fragment, { children: [focusEnabled ? (_jsx(_Fragment, { children: unFocusOnPressOut ? (_jsx(Rect, { onPressIn: function () { return onStripPress(item, index); }, onPressOut: function () {
                                return setTimeout(function () { return setSelectedIndex(-1); }, delayBeforeUnFocus);
                            }, x: initialSpacing + (spacing * index - spacing / 2), y: 8, width: spacing, height: containerHeight, fill: 'none' })) : (_jsx(Rect, { onPress: function () { return onStripPress(item, index); }, x: initialSpacing + (spacing * index - spacing / 2), y: 8, width: spacing, height: containerHeight, fill: 'none' })) })) : null, item.showStrip ||
                        (focusEnabled && index === selectedIndex && showStripOnFocus) ? (_jsx(Rect, { x: initialSpacing + (spacing * index - dataPointsWidth / 2), y: currentStripHeight
                            ? containerHeight - currentStripHeight + 8
                            : containerHeight -
                                dataPointsHeight / 2 +
                                20 -
                                (item.value * containerHeight) / maxValue, width: currentStripWidth, height: currentStripHeight ||
                            containerHeight - dataPointsHeight / 2 + 20, opacity: currentStripOpacity, fill: currentStripColor })) : null, customDataPoint ? (_jsx(View, { style: [
                            styles.customDataPointContainer,
                            {
                                height: dataPointsHeight,
                                width: dataPointsWidth,
                                top: containerHeight - (item.value * containerHeight) / maxValue,
                                left: getX(index) - dataPointsWidth,
                            },
                        ], children: customDataPoint() })) : null, dataPointsShape === 'rectangular' ? (_jsx(Fragment, { children: customDataPoint ? null : (_jsx(Rect, { x: getX(index) - dataPointsWidth, y: extendedContainerHeight +
                                dataPointsHeight / 2 -
                                (item.value * containerHeight) / maxValue, width: dataPointsWidth, height: dataPointsHeight, fill: showDataPointOnFocus
                                ? index === selectedIndex
                                    ? dataPointsColor
                                    : 'none'
                                : dataPointsColor, onPress: function () {
                                item.onPress
                                    ? item.onPress(item, index)
                                    : props.onPress
                                        ? props.onPress(item, index)
                                        : null;
                            } })) }, index)) : (_jsx(Fragment, { children: customDataPoint ? null : (_jsx(Circle, { cx: getX(index), cy: getY(index), r: dataPointsRadius, fill: showDataPointOnFocus
                                ? index === selectedIndex
                                    ? dataPointsColor
                                    : 'none'
                                : dataPointsColor, onPress: function () {
                                item.onPress
                                    ? item.onPress(item, index)
                                    : props.onPress
                                        ? props.onPress(item, index)
                                        : null;
                            } })) }, index)), dataPointLabelComponent ? (!showTextOnFocus || index === selectedIndex ? (_jsx(View, { style: [
                            styles.customDataPointContainer,
                            {
                                top: containerHeight +
                                    (item.dataPointLabelShiftY ||
                                        props.dataPointLabelShiftY ||
                                        0) -
                                    (item.value * containerHeight) / maxValue,
                                left: initialSpacing +
                                    (item.dataPointLabelShiftX ||
                                        props.dataPointLabelShiftX ||
                                        0) -
                                    (item.dataPointLabelWidth
                                        ? item.dataPointLabelWidth + 20
                                        : props.dataPointLabelWidth
                                            ? props.dataPointLabelWidth + 20
                                            : 50) /
                                        2 +
                                    spacing * index,
                            },
                        ], children: dataPointLabelComponent() })) : null) : text || item.dataPointText ? (!showTextOnFocus || index === selectedIndex ? (_jsx(CanvasText, { fill: item.textColor || textColor, fontSize: item.textFontSize || textFontSize, x: initialSpacing -
                            dataPointsWidth +
                            spacing * index +
                            (item.textShiftX || props.textShiftX || 0), y: extendedContainerHeight -
                            dataPointsHeight / 2 -
                            (item.value * containerHeight) / maxValue +
                            (item.textShiftY || props.textShiftY || 0), children: !showTextOnFocus ? item.dataPointText : text })) : null) : null] }, index));
        });
    };
    var renderSpecificVerticalLines = function (dataForRender) {
        return dataForRender.map(function (item, index) {
            if (item.showVerticalLine) {
                return (_jsx(Rect, { x: initialSpacing -
                        (item.verticalLineThickness || 1) / 2 -
                        1 +
                        spacing * index, y: item.verticalLineUptoDataPoint
                        ? containerHeight -
                            (item.value * containerHeight) / maxValue +
                            10
                        : -xAxisThickness, width: item.verticalLineThickness || 1, height: item.verticalLineUptoDataPoint
                        ? (item.value * containerHeight) / maxValue - xAxisThickness
                        : containerHeight + 10 - xAxisThickness, fill: item.verticalLineColor || 'lightgray' }, index));
            }
            return null;
        });
    };
    var lineSvgComponent = function (pointsArray, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) {
        return (_jsxs(Svg, { children: [strokeDashArray &&
                    strokeDashArray.length === 2 &&
                    typeof strokeDashArray[0] === 'number' &&
                    typeof strokeDashArray[1] === 'number'
                    ? pointsArray.map(function (points, index) { return (_jsx(Path, { d: points.points, fill: "none", stroke: points.color === 'green' ? color : colorNegative, strokeWidth: currentLineThickness || thickness, strokeDasharray: strokeDashArray }, index)); })
                    : pointsArray.map(function (points, index) {
                        return (_jsx(Path, { d: points.points, fill: "none", stroke: points.color === 'green' ? color : colorNegative, strokeWidth: currentLineThickness || thickness }, index));
                    }), areaChart && (_jsxs(_Fragment, { children: [_jsxs(LinearGradient, { id: "Gradient", x1: "0", y1: "0", x2: gradientDirection === 'horizontal' ? '1' : '0', y2: gradientDirection === 'vertical' ? '1' : '0', children: [_jsx(Stop, { offset: "0", stopColor: startFillColor, stopOpacity: startOpacity.toString() }), _jsx(Stop, { offset: "1", stopColor: endFillColor, stopOpacity: endOpacity.toString() })] }), _jsxs(LinearGradient, { id: "GradientNegative", x1: "0", y1: "0", x2: gradientDirection === 'horizontal' ? '1' : '0', y2: gradientDirection === 'vertical' ? '1' : '0', children: [_jsx(Stop, { offset: "1", stopColor: startFillColorNegative, stopOpacity: startOpacityNegative.toString() }), _jsx(Stop, { offset: "0", stopColor: endFillColorNegative, stopOpacity: endOpacityNegative.toString() })] })] })), areaChart
                    ? fillPointsArray.map(function (item, index) {
                        return (_jsx(Path, { d: item.points, fill: item.color === 'green'
                                ? 'url(#Gradient)'
                                : 'url(#GradientNegative)', stroke: 'transparent', strokeWidth: currentLineThickness || thickness }, index));
                    })
                    : null, renderSpecificVerticalLines(data), !hideDataPoints1
                    ? renderDataPoints(data, dataPointsShape1, dataPointsWidth1, dataPointsHeight1, dataPointsColor1, dataPointsRadius1, textColor1, textFontSize1, startIndex1, endIndex1)
                    : null] }));
    };
    var renderLine = function (zIndex, pointsArray, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) {
        return (_jsx(View, { style: {
                position: 'absolute',
                height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
                bottom: 60 + labelsExtraHeight,
                width: totalWidth,
                zIndex: zIndex,
            }, children: pointsArray.length
                ? lineSvgComponent(pointsArray, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray)
                : null }));
    };
    var renderAnimatedLine = function (zIndex, points, animatedWidth, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) {
        return (_jsx(Animated.View, { style: {
                position: 'absolute',
                height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
                bottom: 60, //stepHeight * -0.5 + xAxisThickness,
                width: animatedWidth,
                zIndex: zIndex,
                // backgroundColor: 'wheat',
            }, children: lineSvgComponent(points, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) }));
    };
    var renderChartContent = function () {
        return (_jsxs(_Fragment, { children: [isAnimated
                    ? renderAnimatedLine(zIndex, pointsArray, animatedWidth, thickness1, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray1)
                    : renderLine(zIndex, pointsArray, thickness1, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray1), data.map(function (item, index) {
                    return (_jsx(View, { children: isAnimated
                            ? renderAnimatedLabel(index, item.label ||
                                (props.xAxisLabelTexts && props.xAxisLabelTexts[index]
                                    ? props.xAxisLabelTexts[index]
                                    : ''), item.labelTextStyle || props.xAxisLabelTextStyle, item.labelComponent)
                            : renderLabel(index, item.label ||
                                (props.xAxisLabelTexts && props.xAxisLabelTexts[index]
                                    ? props.xAxisLabelTexts[index]
                                    : ''), item.labelTextStyle || props.xAxisLabelTextStyle, item.labelComponent) }, index));
                })] }));
    };
    return (_jsx(BarAndLineChartsWrapper, __assign({}, barAndLineChartsWrapperProps, { scrollRef: scrollRef, animatedWidth: animatedWidth, renderChartContent: renderChartContent, remainingScrollViewProps: { onScroll: function (ev) { var _a; return (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, ev); } } })));
};
