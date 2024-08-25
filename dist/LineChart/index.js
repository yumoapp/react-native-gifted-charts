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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Animated, Easing, Text, Dimensions, I18nManager, } from 'react-native';
import { styles } from './styles';
import { screenWidth, usePrevious } from '../utils';
import Svg, { Path, LinearGradient, Stop, Circle, Rect, Text as CanvasText, Line, ClipPath, Use, } from 'react-native-svg';
import { getSegmentedPathObjects, getRegionPathObjects, RANGE_ENTER, RANGE_EXIT, SEGMENT_END, SEGMENT_START, STOP, useLineChart, adjustToOffset, LineDefaults, pointsWithPaddedRepititions, } from 'gifted-charts-core';
import BarAndLineChartsWrapper from '../Components/BarAndLineChartsWrapper';
import { StripAndLabel } from '../Components/common/StripAndLabel';
import { Pointer } from '../Components/common/Pointer';
var AnimatedPath = Animated.createAnimatedComponent(Path);
export var LineChart = function (props) {
    var _a, _b, _c;
    var scrollRef = (_a = props.scrollRef) !== null && _a !== void 0 ? _a : useRef(null);
    var opacityValue = useMemo(function () { return new Animated.Value(0); }, []);
    var heightValue = useMemo(function () { return new Animated.Value(0); }, []);
    var widthValue = useMemo(function () { return new Animated.Value(0); }, []);
    var widthValue2 = useMemo(function () { return new Animated.Value(0); }, []);
    var widthValue3 = useMemo(function () { return new Animated.Value(0); }, []);
    var widthValue4 = useMemo(function () { return new Animated.Value(0); }, []);
    var widthValue5 = useMemo(function () { return new Animated.Value(0); }, []);
    var _d = useLineChart(__assign(__assign({}, props), { parentWidth: (_b = props.parentWidth) !== null && _b !== void 0 ? _b : screenWidth })), scrollX = _d.scrollX, setScrollX = _d.setScrollX, arrow1Points = _d.arrow1Points, arrow2Points = _d.arrow2Points, arrow3Points = _d.arrow3Points, arrow4Points = _d.arrow4Points, arrow5Points = _d.arrow5Points, secondaryArrowPoints = _d.secondaryArrowPoints, pointerIndex = _d.pointerIndex, setPointerIndex = _d.setPointerIndex, pointerX = _d.pointerX, setPointerX = _d.setPointerX, pointerY = _d.pointerY, setPointerY = _d.setPointerY, pointerItem = _d.pointerItem, setPointerItem = _d.setPointerItem, pointerY2 = _d.pointerY2, setPointerY2 = _d.setPointerY2, pointerItem2 = _d.pointerItem2, setPointerItem2 = _d.setPointerItem2, pointerY3 = _d.pointerY3, setPointerY3 = _d.setPointerY3, pointerItem3 = _d.pointerItem3, setPointerItem3 = _d.setPointerItem3, pointerY4 = _d.pointerY4, setPointerY4 = _d.setPointerY4, pointerItem4 = _d.pointerItem4, setPointerItem4 = _d.setPointerItem4, pointerY5 = _d.pointerY5, setPointerY5 = _d.setPointerY5, pointerYsForDataSet = _d.pointerYsForDataSet, setPointerYsForDataSet = _d.setPointerYsForDataSet, pointerItem5 = _d.pointerItem5, setPointerItem5 = _d.setPointerItem5, secondaryPointerY = _d.secondaryPointerY, setSecondaryPointerY = _d.setSecondaryPointerY, secondaryPointerItem = _d.secondaryPointerItem, setSecondaryPointerItem = _d.setSecondaryPointerItem, pointerItemsForSet = _d.pointerItemsForSet, setPointerItemsForSet = _d.setPointerItemsForSet, secondaryPointerItemsForSet = _d.secondaryPointerItemsForSet, setSecondaryPointerItemsForSet = _d.setSecondaryPointerItemsForSet, responderStartTime = _d.responderStartTime, setResponderStartTime = _d.setResponderStartTime, setResponderActive = _d.setResponderActive, points = _d.points, points2 = _d.points2, points3 = _d.points3, points4 = _d.points4, points5 = _d.points5, secondaryPoints = _d.secondaryPoints, fillPoints = _d.fillPoints, fillPoints2 = _d.fillPoints2, fillPoints3 = _d.fillPoints3, fillPoints4 = _d.fillPoints4, fillPoints5 = _d.fillPoints5, secondaryFillPoints = _d.secondaryFillPoints, pointsFromSet = _d.pointsFromSet, fillPointsFromSet = _d.fillPointsFromSet, arrowPointsFromSet = _d.arrowPointsFromSet, selectedIndex = _d.selectedIndex, setSelectedIndex = _d.setSelectedIndex, containerHeight = _d.containerHeight, data = _d.data, data2 = _d.data2, data3 = _d.data3, data4 = _d.data4, data5 = _d.data5, secondaryData = _d.secondaryData, dataSet = _d.dataSet, data0 = _d.data0, labelsExtraHeight = _d.labelsExtraHeight, animationDuration = _d.animationDuration, onDataChangeAnimationDuration = _d.onDataChangeAnimationDuration, animateTogether = _d.animateTogether, animateOnDataChange = _d.animateOnDataChange, startIndex1 = _d.startIndex1, startIndex2 = _d.startIndex2, endIndex1 = _d.endIndex1, endIndex2 = _d.endIndex2, startIndex3 = _d.startIndex3, endIndex3 = _d.endIndex3, startIndex4 = _d.startIndex4, endIndex4 = _d.endIndex4, startIndex5 = _d.startIndex5, endIndex5 = _d.endIndex5, initialSpacing = _d.initialSpacing, thickness = _d.thickness, yAxisLabelWidth = _d.yAxisLabelWidth, spacing = _d.spacing, xAxisThickness = _d.xAxisThickness, dataPointsHeight1 = _d.dataPointsHeight1, dataPointsWidth1 = _d.dataPointsWidth1, dataPointsRadius1 = _d.dataPointsRadius1, dataPointsColor1 = _d.dataPointsColor1, dataPointsShape1 = _d.dataPointsShape1, dataPointsHeight2 = _d.dataPointsHeight2, dataPointsWidth2 = _d.dataPointsWidth2, dataPointsRadius2 = _d.dataPointsRadius2, dataPointsColor2 = _d.dataPointsColor2, dataPointsShape2 = _d.dataPointsShape2, dataPointsHeight3 = _d.dataPointsHeight3, dataPointsWidth3 = _d.dataPointsWidth3, dataPointsRadius3 = _d.dataPointsRadius3, dataPointsColor3 = _d.dataPointsColor3, dataPointsShape3 = _d.dataPointsShape3, dataPointsHeight4 = _d.dataPointsHeight4, dataPointsWidth4 = _d.dataPointsWidth4, dataPointsRadius4 = _d.dataPointsRadius4, dataPointsColor4 = _d.dataPointsColor4, dataPointsShape4 = _d.dataPointsShape4, dataPointsHeight5 = _d.dataPointsHeight5, dataPointsWidth5 = _d.dataPointsWidth5, dataPointsRadius5 = _d.dataPointsRadius5, dataPointsColor5 = _d.dataPointsColor5, dataPointsShape5 = _d.dataPointsShape5, getIsNthAreaChart = _d.getIsNthAreaChart, textFontSize1 = _d.textFontSize1, textFontSize2 = _d.textFontSize2, textFontSize3 = _d.textFontSize3, textFontSize4 = _d.textFontSize4, textFontSize5 = _d.textFontSize5, textColor1 = _d.textColor1, textColor2 = _d.textColor2, textColor3 = _d.textColor3, textColor4 = _d.textColor4, textColor5 = _d.textColor5, totalWidth = _d.totalWidth, maxValue = _d.maxValue, overflowTop = _d.overflowTop, extendedContainerHeight = _d.extendedContainerHeight, getX = _d.getX, getY = _d.getY, getSecondaryY = _d.getSecondaryY, secondaryMaxValue = _d.secondaryMaxValue, showValuesAsDataPointsText = _d.showValuesAsDataPointsText, thickness1 = _d.thickness1, thickness2 = _d.thickness2, thickness3 = _d.thickness3, thickness4 = _d.thickness4, thickness5 = _d.thickness5, zIndex1 = _d.zIndex1, zIndex2 = _d.zIndex2, zIndex3 = _d.zIndex3, zIndex4 = _d.zIndex4, zIndex5 = _d.zIndex5, strokeDashArray1 = _d.strokeDashArray1, strokeDashArray2 = _d.strokeDashArray2, strokeDashArray3 = _d.strokeDashArray3, strokeDashArray4 = _d.strokeDashArray4, strokeDashArray5 = _d.strokeDashArray5, rotateLabel = _d.rotateLabel, isAnimated = _d.isAnimated, hideDataPoints1 = _d.hideDataPoints1, hideDataPoints2 = _d.hideDataPoints2, hideDataPoints3 = _d.hideDataPoints3, hideDataPoints4 = _d.hideDataPoints4, hideDataPoints5 = _d.hideDataPoints5, color1 = _d.color1, color2 = _d.color2, color3 = _d.color3, color4 = _d.color4, color5 = _d.color5, startFillColor1 = _d.startFillColor1, endFillColor1 = _d.endFillColor1, startOpacity1 = _d.startOpacity1, endOpacity1 = _d.endOpacity1, startFillColor2 = _d.startFillColor2, endFillColor2 = _d.endFillColor2, startOpacity2 = _d.startOpacity2, endOpacity2 = _d.endOpacity2, startFillColor3 = _d.startFillColor3, endFillColor3 = _d.endFillColor3, startOpacity3 = _d.startOpacity3, endOpacity3 = _d.endOpacity3, startFillColor4 = _d.startFillColor4, endFillColor4 = _d.endFillColor4, startOpacity4 = _d.startOpacity4, endOpacity4 = _d.endOpacity4, startFillColor5 = _d.startFillColor5, endFillColor5 = _d.endFillColor5, startOpacity5 = _d.startOpacity5, endOpacity5 = _d.endOpacity5, arrowStrokeWidth1 = _d.arrowStrokeWidth1, arrowStrokeColor1 = _d.arrowStrokeColor1, arrowFillColor1 = _d.arrowFillColor1, arrowStrokeWidth2 = _d.arrowStrokeWidth2, arrowStrokeColor2 = _d.arrowStrokeColor2, arrowFillColor2 = _d.arrowFillColor2, arrowStrokeWidth3 = _d.arrowStrokeWidth3, arrowStrokeColor3 = _d.arrowStrokeColor3, arrowFillColor3 = _d.arrowFillColor3, arrowStrokeWidth4 = _d.arrowStrokeWidth4, arrowStrokeColor4 = _d.arrowStrokeColor4, arrowFillColor4 = _d.arrowFillColor4, arrowStrokeWidth5 = _d.arrowStrokeWidth5, arrowStrokeColor5 = _d.arrowStrokeColor5, arrowFillColor5 = _d.arrowFillColor5, arrowStrokeWidthsFromSet = _d.arrowStrokeWidthsFromSet, arrowStrokeColorsFromSet = _d.arrowStrokeColorsFromSet, arrowFillColorsFromSet = _d.arrowFillColorsFromSet, secondaryLineConfig = _d.secondaryLineConfig, gradientDirection = _d.gradientDirection, stepHeight = _d.stepHeight, noOfSectionsBelowXAxis = _d.noOfSectionsBelowXAxis, xAxisTextNumberOfLines = _d.xAxisTextNumberOfLines, xAxisLabelsVerticalShift = _d.xAxisLabelsVerticalShift, pointerConfig = _d.pointerConfig, pointerHeight = _d.pointerHeight, pointerWidth = _d.pointerWidth, pointerRadius = _d.pointerRadius, pointerColor = _d.pointerColor, pointerComponent = _d.pointerComponent, showPointerStrip = _d.showPointerStrip, pointerStripHeight = _d.pointerStripHeight, pointerStripWidth = _d.pointerStripWidth, pointerStripColor = _d.pointerStripColor, pointerStripUptoDataPoint = _d.pointerStripUptoDataPoint, pointerLabelComponent = _d.pointerLabelComponent, stripOverPointer = _d.stripOverPointer, shiftPointerLabelX = _d.shiftPointerLabelX, shiftPointerLabelY = _d.shiftPointerLabelY, pointerLabelWidth = _d.pointerLabelWidth, pointerLabelHeight = _d.pointerLabelHeight, autoAdjustPointerLabelPosition = _d.autoAdjustPointerLabelPosition, pointerVanishDelay = _d.pointerVanishDelay, activatePointersOnLongPress = _d.activatePointersOnLongPress, activatePointersDelay = _d.activatePointersDelay, persistPointer = _d.persistPointer, hidePointers = _d.hidePointers, hidePointer1 = _d.hidePointer1, hidePointer2 = _d.hidePointer2, hidePointer3 = _d.hidePointer3, hidePointer4 = _d.hidePointer4, hidePointer5 = _d.hidePointer5, hideSecondaryPointer = _d.hideSecondaryPointer, pointerEvents = _d.pointerEvents, focusEnabled = _d.focusEnabled, showDataPointOnFocus = _d.showDataPointOnFocus, showStripOnFocus = _d.showStripOnFocus, showTextOnFocus = _d.showTextOnFocus, showDataPointLabelOnFocus = _d.showDataPointLabelOnFocus, stripHeight = _d.stripHeight, stripWidth = _d.stripWidth, stripColor = _d.stripColor, stripOpacity = _d.stripOpacity, stripStrokeDashArray = _d.stripStrokeDashArray, unFocusOnPressOut = _d.unFocusOnPressOut, delayBeforeUnFocus = _d.delayBeforeUnFocus, lineGradient = _d.lineGradient, lineGradientDirection = _d.lineGradientDirection, lineGradientStartColor = _d.lineGradientStartColor, lineGradientEndColor = _d.lineGradientEndColor, barAndLineChartsWrapperProps = _d.barAndLineChartsWrapperProps, areaChart = _d.areaChart;
    var secondaryXAxis = props.secondaryXAxis, intersectionAreaConfig = props.intersectionAreaConfig;
    var widthValuesFromSet = useMemo(function () { return dataSet === null || dataSet === void 0 ? void 0 : dataSet.map(function (set) { return new Animated.Value(0); }); }, []);
    var animatedPoints = new Animated.Value(0);
    var animatedFillPoints = new Animated.Value(0);
    var oldPoints = usePrevious(points);
    var oldFillPoints = usePrevious(fillPoints);
    var animatedPath = animateOnDataChange && points && oldPoints
        ? animatedPoints.interpolate({
            inputRange: [0, 1],
            outputRange: pointsWithPaddedRepititions(oldPoints, points),
        })
        : '';
    var animatedFillPath = animateOnDataChange && fillPoints && oldFillPoints
        ? animatedFillPoints.interpolate({
            inputRange: [0, 1],
            outputRange: pointsWithPaddedRepititions(oldFillPoints, fillPoints),
        })
        : '';
    useEffect(function () {
        if (animateOnDataChange) {
            Animated.timing(animatedPoints, {
                toValue: 1,
                duration: onDataChangeAnimationDuration,
                useNativeDriver: true,
                easing: Easing.ease,
            }).start();
            if (props.areaChart || props.areaChart1) {
                Animated.timing(animatedFillPoints, {
                    toValue: 1,
                    duration: onDataChangeAnimationDuration,
                    useNativeDriver: true,
                    easing: Easing.ease,
                }).start();
            }
        }
    }, [animatedPoints]);
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
            toValue: totalWidth,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [animationDuration, widthValue]);
    var decreaseWidth2 = useCallback(function () {
        widthValue2.setValue(0);
        Animated.timing(widthValue2, {
            toValue: totalWidth,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [animationDuration, widthValue2]);
    var decreaseWidth3 = useCallback(function () {
        widthValue3.setValue(0);
        Animated.timing(widthValue3, {
            toValue: totalWidth,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [animationDuration, widthValue3]);
    var decreaseWidth4 = useCallback(function () {
        widthValue4.setValue(0);
        Animated.timing(widthValue4, {
            toValue: totalWidth,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [animationDuration, widthValue4]);
    var decreaseWidth5 = useCallback(function () {
        widthValue5.setValue(0);
        Animated.timing(widthValue5, {
            toValue: totalWidth,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [animationDuration, widthValue5]);
    var decreaseWidthsFromSet = useCallback(function () {
        dataSet === null || dataSet === void 0 ? void 0 : dataSet.map(function (set, index) {
            var _a;
            (_a = widthValuesFromSet === null || widthValuesFromSet === void 0 ? void 0 : widthValuesFromSet[index]) === null || _a === void 0 ? void 0 : _a.setValue(0);
            if (widthValuesFromSet === null || widthValuesFromSet === void 0 ? void 0 : widthValuesFromSet[index]) {
                Animated.timing(widthValuesFromSet === null || widthValuesFromSet === void 0 ? void 0 : widthValuesFromSet[index], {
                    toValue: totalWidth,
                    duration: animationDuration,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }).start();
            }
        });
    }, [animationDuration, widthValuesFromSet]);
    useEffect(function () {
        decreaseWidth();
        labelsAppear();
        widthValuesFromSet === null || widthValuesFromSet === void 0 ? void 0 : widthValuesFromSet.forEach(function (item, index) {
            setTimeout(function () {
                decreaseWidthsFromSet();
            }, animateTogether ? 0 : animationDuration * index);
        });
        setTimeout(function () {
            decreaseWidth2();
        }, animateTogether ? 0 : animationDuration);
        setTimeout(function () {
            decreaseWidth3();
        }, animateTogether ? 0 : animationDuration * 2);
        setTimeout(function () {
            decreaseWidth4();
        }, animateTogether ? 0 : animationDuration * 3);
        setTimeout(function () {
            decreaseWidth5();
        }, animateTogether ? 0 : animationDuration * 4);
    }, [
        animateTogether,
        animationDuration,
        decreaseWidth,
        decreaseWidth2,
        decreaseWidth3,
        decreaseWidth4,
        decreaseWidth5,
        labelsAppear,
    ]);
    var svgWrapperViewStyle = {
        position: 'absolute',
        bottom: 62 +
            xAxisLabelsVerticalShift +
            labelsExtraHeight -
            xAxisThickness -
            ((_c = props.overflowBottom) !== null && _c !== void 0 ? _c : dataPointsRadius1),
        zIndex: 1,
        transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    };
    var renderLabel = function (top, index, label, labelTextStyle, labelComponent) {
        var _a, _b;
        return (_jsx(View, { style: [
                {
                    position: 'absolute',
                    bottom: top
                        ? containerHeight +
                            60 +
                            ((_a = secondaryXAxis === null || secondaryXAxis === void 0 ? void 0 : secondaryXAxis.labelsDistanceFromXaxis) !== null && _a !== void 0 ? _a : 15)
                        : 54 - xAxisTextNumberOfLines * 18,
                    zIndex: 10,
                    width: spacing + labelsExtraHeight,
                    left: index === 0 && initialSpacing < 10
                        ? initialSpacing / 2 + spacing * index - spacing / 2 + 4
                        : initialSpacing / 2 + spacing * index - spacing / 2 - 10,
                    height: (_b = props.xAxisLabelsHeight) !== null && _b !== void 0 ? _b : xAxisTextNumberOfLines * 18,
                },
                rotateLabel && { transform: [{ rotate: '60deg' }] },
            ], children: labelComponent ? (labelComponent()) : (_jsx(Text, { style: [{ textAlign: 'center' }, labelTextStyle], numberOfLines: xAxisTextNumberOfLines, children: label })) }));
    };
    var renderAnimatedLabel = function (top, index, label, labelTextStyle, labelComponent) {
        var _a, _b;
        return (_jsx(Animated.View, { style: [
                {
                    height: rotateLabel
                        ? 40
                        : ((_a = props.xAxisLabelsHeight) !== null && _a !== void 0 ? _a : xAxisTextNumberOfLines * 18),
                    position: 'absolute',
                    bottom: top
                        ? containerHeight +
                            60 +
                            ((_b = secondaryXAxis === null || secondaryXAxis === void 0 ? void 0 : secondaryXAxis.labelsDistanceFromXaxis) !== null && _b !== void 0 ? _b : 15)
                        : rotateLabel
                            ? 10
                            : 54 - xAxisTextNumberOfLines * 18,
                    zIndex: 10,
                    width: spacing,
                    left: index === 0 && initialSpacing < 10
                        ? initialSpacing / 2 + spacing * index - spacing / 2 + 4
                        : initialSpacing / 2 + spacing * index - spacing / 2 - 10,
                    opacity: appearingOpacity,
                },
                rotateLabel && { transform: [{ rotate: '60deg' }] },
            ], children: labelComponent ? (labelComponent()) : (_jsx(Text, { style: [{ textAlign: 'center' }, labelTextStyle], numberOfLines: xAxisTextNumberOfLines, children: label })) }));
    };
    var onStripPress = function (item, index) {
        if (props.focusedDataPointIndex === undefined || !props.onFocus) {
            setSelectedIndex(index);
        }
        if (props.onFocus) {
            props.onFocus(item, index);
        }
    };
    var renderDataPoints = function (hideDataPoints, dataForRender, originalDataFromProps, dataPtsShape, dataPtsWidth, dataPtsHeight, dataPtsColor, dataPtsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText) {
        var getYOrSecondaryY = isSecondary ? getSecondaryY : getY;
        return dataForRender.map(function (item, index) {
            var _a;
            var _b, _c, _d, _e, _f;
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
                    item.focusedDataPointColor ||
                        props.focusedDataPointColor ||
                        LineDefaults.focusedDataPointColor;
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
            if (showValuesAsDataPointsText) {
                text = originalDataFromProps[index].value;
            }
            var currentStripHeight = (_b = item.stripHeight) !== null && _b !== void 0 ? _b : stripHeight;
            var currentStripWidth = (_c = item.stripWidth) !== null && _c !== void 0 ? _c : stripWidth;
            var currentStripOpacity = (_d = item.stripOpacity) !== null && _d !== void 0 ? _d : stripOpacity;
            var currentStripStrokeDashArray = (_f = (_e = item.stripStrokeDashArray) !== null && _e !== void 0 ? _e : stripStrokeDashArray) !== null && _f !== void 0 ? _f : '';
            var currentStripColor = item.stripColor || stripColor;
            var position = I18nManager.isRTL ? 'right' : 'left';
            var y1 = currentStripHeight
                ? containerHeight - currentStripHeight + 8
                : containerHeight -
                    dataPointsHeight / 2 +
                    14 -
                    (item.value * containerHeight) / maxValue;
            var actualStripHeight = currentStripHeight ||
                (item.value * containerHeight) / maxValue - 2 + overflowTop;
            return (_jsxs(Fragment, { children: [focusEnabled ? (_jsx(_Fragment, { children: unFocusOnPressOut ? ( // remove strip on onFocus
                        _jsx(Rect, { onPressIn: function () { return onStripPress(item, index); }, onPressOut: function () {
                                return setTimeout(function () { return setSelectedIndex(-1); }, delayBeforeUnFocus);
                            }, x: initialSpacing + (spacing * index - spacing / 2), y: 8, width: spacing, height: containerHeight - 0, fill: 'none' })) : (_jsx(Rect, { onPress: function () { return onStripPress(item, index); }, x: initialSpacing + (spacing * index - spacing / 2), y: 8, width: spacing, height: containerHeight, fill: 'none' })) })) : null, item.showStrip ||
                        (focusEnabled && index === selectedIndex && showStripOnFocus) ? (_jsx(Line, { x1: initialSpacing + spacing * index - currentStripWidth / 2 - 1, y1: y1, x2: initialSpacing + spacing * index - currentStripWidth / 2 - 1, y2: y1 + actualStripHeight, strokeWidth: currentStripWidth, stroke: currentStripColor, strokeDasharray: currentStripStrokeDashArray, opacity: currentStripOpacity })) : null, hideDataPoints ? null : (_jsxs(_Fragment, { children: [customDataPoint ? (_jsx(View, { style: [
                                    styles.customDataPointContainer,
                                    (_a = {
                                            height: dataPointsHeight,
                                            width: dataPointsWidth,
                                            top: getYOrSecondaryY(item.value)
                                        },
                                        _a[position] = initialSpacing - dataPointsWidth + spacing * index,
                                        _a.transform = [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
                                        _a),
                                ], children: customDataPoint(item, index) })) : null, dataPointsShape === 'rectangular' ? (_jsx(Fragment, { children: customDataPoint ? null : (_jsx(Rect, { x: getX(index) - dataPointsWidth / 2, y: getYOrSecondaryY(item.value) - dataPointsHeight / 2, width: dataPointsWidth, height: dataPointsHeight, fill: showDataPointOnFocus
                                        ? index === selectedIndex
                                            ? dataPointsColor
                                            : 'none'
                                        : dataPointsColor, onPress: function () {
                                        item.onPress
                                            ? item.onPress(item, index)
                                            : props.onPress
                                                ? props.onPress(item, index)
                                                : null;
                                    } })) }, index)) : (_jsx(Fragment, { children: customDataPoint ? null : (_jsx(Circle, { cx: getX(index), cy: getYOrSecondaryY(item.value), r: dataPointsRadius, fill: showDataPointOnFocus
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
                                        zIndex: index === selectedIndex ? 1000 : 0,
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
                                ], children: showDataPointLabelOnFocus
                                    ? index === selectedIndex
                                        ? dataPointLabelComponent()
                                        : null
                                    : dataPointLabelComponent() })) : null) : text || item.dataPointText ? (!showTextOnFocus || index === selectedIndex ? (_jsx(CanvasText, { fill: item.textColor || textColor, fontSize: item.textFontSize || textFontSize, x: getX(index) -
                                    dataPointsWidth +
                                    (item.textShiftX || props.textShiftX || 0), y: getYOrSecondaryY(item.value) -
                                    dataPointsHeight / 2 +
                                    (item.textShiftY || props.textShiftY || 0), children: !showTextOnFocus && !showValuesAsDataPointsText
                                    ? item.dataPointText
                                    : text })) : null) : null] }))] }, index));
        });
    };
    var renderSpecificVerticalLines = function (dataForRender) {
        return dataForRender.map(function (item, index) {
            var _a, _b, _c;
            if (item.showVerticalLine) {
                var x = getX(index);
                return (_jsx(Line, { x1: x, y1: extendedContainerHeight, x2: x, y2: ((_a = item.verticalLineUptoDataPoint) !== null && _a !== void 0 ? _a : props.verticalLinesUptoDataPoint)
                        ? getY(item.value)
                        : -xAxisThickness, stroke: item.verticalLineColor || props.verticalLinesColor || 'lightgray', strokeWidth: item.verticalLineThickness || props.verticalLinesThickness || 2, strokeDasharray: (_c = (_b = item.verticalLineStrokeDashArray) !== null && _b !== void 0 ? _b : props.verticalLinesStrokeDashArray) !== null && _c !== void 0 ? _c : '' }, index));
            }
            return null;
        });
    };
    var renderPointer = function (lineNumber, isDataSet) {
        if (hidePointers)
            return;
        if (isDataSet) {
            var pointerItemLocal_1, pointerYLocal_1, pointerColorLocal_1;
            return dataSet === null || dataSet === void 0 ? void 0 : dataSet.map(function (set, index) {
                var _a, _b;
                var pIndex = barAndLineChartsWrapperProps.pointerIndex;
                pointerItemLocal_1 = set.data[pIndex];
                if (set.hidePointers || (pointerItemLocal_1 === null || pointerItemLocal_1 === void 0 ? void 0 : pointerItemLocal_1.hidePointer))
                    return null;
                pointerYLocal_1 = pointerYsForDataSet[index];
                pointerColorLocal_1 =
                    (_b = (_a = pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointerColorsForDataSet) === null || _a === void 0 ? void 0 : _a[index]) !== null && _b !== void 0 ? _b : pointerColor;
                return (_jsx(Fragment, { children: Pointer({
                        pointerX: pointerX,
                        pointerYLocal: pointerYLocal_1 + xAxisThickness,
                        pointerComponent: pointerComponent,
                        pointerHeight: pointerHeight,
                        pointerRadius: pointerRadius,
                        pointerWidth: pointerWidth,
                        pointerItemLocal: pointerItemLocal_1,
                        pointerColorLocal: pointerColorLocal_1,
                    }) }, 'dSetPts' + index));
            });
        }
        if (lineNumber === 1 && hidePointer1)
            return;
        if (lineNumber === 2 && hidePointer2)
            return;
        if (lineNumber === 3 && hidePointer3)
            return;
        if (lineNumber === 4 && hidePointer4)
            return;
        if (lineNumber === 5 && hidePointer5)
            return;
        // 6 is for secondaryData
        if (lineNumber === 6 && hideSecondaryPointer)
            return;
        var pointerItemLocal, pointerYLocal, pointerColorLocal;
        switch (lineNumber) {
            case 1:
                pointerItemLocal = pointerItem;
                pointerYLocal = pointerY;
                pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer1Color) || pointerColor;
                break;
            case 2:
                pointerItemLocal = pointerItem2;
                pointerYLocal = pointerY2;
                pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer2Color) || pointerColor;
                break;
            case 3:
                pointerItemLocal = pointerItem3;
                pointerYLocal = pointerY3;
                pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer3Color) || pointerColor;
                break;
            case 4:
                pointerItemLocal = pointerItem4;
                pointerYLocal = pointerY4;
                pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer4Color) || pointerColor;
                break;
            case 5:
                pointerItemLocal = pointerItem5;
                pointerYLocal = pointerY5;
                pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer5Color) || pointerColor;
                break;
            case 6:
                pointerItemLocal = secondaryPointerItem;
                pointerYLocal = secondaryPointerY;
                pointerColorLocal =
                    (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.secondaryPointerColor) || pointerColor;
                break;
        }
        if (!pointerYLocal)
            return;
        return Pointer({
            pointerX: pointerX,
            pointerYLocal: pointerYLocal + xAxisThickness,
            pointerComponent: pointerComponent,
            pointerHeight: pointerHeight,
            pointerRadius: pointerRadius,
            pointerWidth: pointerWidth,
            pointerItemLocal: pointerItemLocal,
            pointerColorLocal: pointerColorLocal,
        });
    };
    var renderStripAndLabel = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var pointerItemLocal, pointerYLocal;
        pointerItemLocal = [
            __assign(__assign({}, pointerItem), { value: (_b = (_a = props.data) === null || _a === void 0 ? void 0 : _a[pointerIndex]) === null || _b === void 0 ? void 0 : _b.value }),
        ];
        var arr = [pointerY];
        if (pointerY2 !== 0) {
            arr.push(pointerY2);
            pointerItemLocal.push(__assign(__assign({}, pointerItem), { value: (_d = (_c = props.data2) === null || _c === void 0 ? void 0 : _c[pointerIndex]) === null || _d === void 0 ? void 0 : _d.value }));
        }
        if (pointerY3 !== 0) {
            arr.push(pointerY3);
            pointerItemLocal.push(__assign(__assign({}, pointerItem), { value: (_f = (_e = props.data3) === null || _e === void 0 ? void 0 : _e[pointerIndex]) === null || _f === void 0 ? void 0 : _f.value }));
        }
        if (pointerY4 !== 0) {
            arr.push(pointerY4);
            pointerItemLocal.push(__assign(__assign({}, pointerItem), { value: (_h = (_g = props.data4) === null || _g === void 0 ? void 0 : _g[pointerIndex]) === null || _h === void 0 ? void 0 : _h.value }));
        }
        if (pointerY5 !== 0) {
            arr.push(pointerY5);
            pointerItemLocal.push(__assign(__assign({}, pointerItem), { value: (_k = (_j = props.data5) === null || _j === void 0 ? void 0 : _j[pointerIndex]) === null || _k === void 0 ? void 0 : _k.value }));
        }
        pointerYLocal = Math.min.apply(Math, __spreadArray([], __read(arr), false));
        return StripAndLabel({
            autoAdjustPointerLabelPosition: autoAdjustPointerLabelPosition,
            pointerX: pointerX,
            pointerLabelWidth: pointerLabelWidth,
            activatePointersOnLongPress: activatePointersOnLongPress,
            yAxisLabelWidth: yAxisLabelWidth,
            pointerRadius: pointerRadius,
            pointerWidth: pointerWidth,
            shiftPointerLabelX: shiftPointerLabelX,
            pointerLabelHeight: pointerLabelHeight,
            pointerYLocal: pointerYLocal,
            pointerStripUptoDataPoint: pointerStripUptoDataPoint,
            pointerStripHeight: pointerStripHeight,
            shiftPointerLabelY: shiftPointerLabelY,
            pointerItemLocal: pointerItemLocal,
            secondaryPointerItem: secondaryPointerItem,
            pointerItemsForSet: pointerItemsForSet,
            secondaryPointerItemsForSet: secondaryPointerItemsForSet,
            showPointerStrip: showPointerStrip,
            pointerStripWidth: pointerStripWidth,
            containerHeight: containerHeight,
            xAxisThickness: xAxisThickness,
            pointerStripColor: pointerStripColor,
            pointerConfig: pointerConfig,
            pointerLabelComponent: pointerLabelComponent,
            scrollX: scrollX,
            pointerEvents: pointerEvents,
            isBarChart: false,
            pointerIndex: pointerIndex,
            width: totalWidth,
            screenWidth: screenWidth,
            hasDataSet: !!dataSet,
        });
    };
    var getLineGradientComponent = function () {
        return props.lineGradientComponent ? (props.lineGradientComponent()) : (_jsxs(LinearGradient, { id: "lineGradient", x1: "0", y1: "0", x2: lineGradientDirection === 'horizontal' ? '1' : '0', y2: lineGradientDirection === 'vertical' ? '1' : '0', children: [_jsx(Stop, { offset: "0", stopColor: lineGradientStartColor }), _jsx(Stop, { offset: "1", stopColor: lineGradientEndColor })] }));
    };
    var getAreaGradientComponent = function (startFillColor, endFillColor, startOpacity, endOpacity) {
        return props.areaGradientComponent ? (props.areaGradientComponent()) : (_jsxs(LinearGradient, { id: "Gradient", x1: "0", y1: "0", x2: gradientDirection === 'horizontal' ? '1' : '0', y2: gradientDirection === 'vertical' ? '1' : '0', children: [_jsx(Stop, { offset: "0", stopColor: startFillColor, stopOpacity: startOpacity.toString() }), _jsx(Stop, { offset: "1", stopColor: endFillColor, stopOpacity: endOpacity.toString() })] }));
    };
    var renderIntersection = function () {
        var _a;
        return (_jsx(View, { style: [svgWrapperViewStyle, { width: totalWidth }], children: _jsxs(Svg, { children: [_jsx(Path, { id: "path1", d: fillPoints, fill: "none", stroke: 'none' }), _jsx(Path, { id: "path2", d: fillPoints2, fill: "none", stroke: 'none' }), _jsx(ClipPath, { id: "clip", children: _jsx(Use, { href: "#path1" }) }), _jsx(Path, { d: fillPoints2, clipPath: "url(#clip)", fill: (_a = intersectionAreaConfig === null || intersectionAreaConfig === void 0 ? void 0 : intersectionAreaConfig.fillColor) !== null && _a !== void 0 ? _a : 'white' }), _jsx(Path, { d: points, stroke: color1, strokeWidth: thickness1 !== null && thickness1 !== void 0 ? thickness1 : thickness, fill: 'none' })] }) }));
    };
    var lineSvgComponent = function (points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, key, hideDataPoints, data, propsData, dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText) {
        var _a, _b;
        if (!points)
            return null;
        var isCurved = points.includes('C');
        var isNthAreaChart = !!dataSet
            ? ((_a = dataSet[Number(key)].areaChart) !== null && _a !== void 0 ? _a : areaChart)
            : getIsNthAreaChart(key !== null && key !== void 0 ? key : 0);
        var ar = [{ d: '', color: '', strokeWidth: 0 }];
        if (points.includes(RANGE_ENTER)) {
            ar = getRegionPathObjects(points, color, currentLineThickness !== null && currentLineThickness !== void 0 ? currentLineThickness : 0, thickness, strokeDashArray !== null && strokeDashArray !== void 0 ? strokeDashArray : [], isCurved, RANGE_ENTER, STOP, RANGE_EXIT);
        }
        else if (points.includes(SEGMENT_START)) {
            ar = getSegmentedPathObjects(points, color, currentLineThickness !== null && currentLineThickness !== void 0 ? currentLineThickness : 0, thickness, strokeDashArray !== null && strokeDashArray !== void 0 ? strokeDashArray : [], isCurved, SEGMENT_START, SEGMENT_END);
        }
        var lineSvgPropsOuter = {
            d: animateOnDataChange && animatedPath ? animatedPath : points,
            fill: 'none',
            stroke: lineGradient
                ? props.lineGradientId
                    ? "url(#".concat(props.lineGradientId, ")")
                    : "url(#lineGradient)"
                : color,
            strokeWidth: currentLineThickness || thickness,
        };
        if (strokeDashArray &&
            strokeDashArray.length === 2 &&
            typeof strokeDashArray[0] === 'number' &&
            typeof strokeDashArray[1] === 'number') {
            lineSvgPropsOuter.strokeDasharray = strokeDashArray;
        }
        return (_jsxs(Svg, { onPress: props.onBackgroundPress, children: [lineGradient && !props.noData && getLineGradientComponent(), isNthAreaChart && !props.noData &&
                    getAreaGradientComponent(startFillColor, endFillColor, startOpacity, endOpacity), isNthAreaChart && !props.noData ? (animateOnDataChange && animatedFillPath ? (_jsx(AnimatedPath, { onPress: props.onChartAreaPress, d: animatedFillPath, fill: props.areaGradientId
                        ? "url(#".concat(props.areaGradientId, ")")
                        : "url(#Gradient)", stroke: 'transparent', strokeWidth: currentLineThickness || thickness })) : (_jsx(Path, { onPress: props.onChartAreaPress, d: fillPoints, fill: props.areaGradientId
                        ? "url(#".concat(props.areaGradientId, ")")
                        : "url(#Gradient)", stroke: 'transparent', strokeWidth: currentLineThickness || thickness }))) : null, points.includes(SEGMENT_START) || points.includes(RANGE_ENTER) ? (ar.map(function (item, index) {
                    var lineSvgProps = {
                        d: item.d,
                        fill: 'none',
                        stroke: lineGradient
                            ? props.lineGradientId
                                ? "url(#".concat(props.lineGradientId, ")")
                                : "url(#lineGradient)"
                            : item.color,
                        strokeWidth: item.strokeWidth,
                    };
                    if (item.strokeDashArray &&
                        item.strokeDashArray.length === 2 &&
                        typeof item.strokeDashArray[0] === 'number' &&
                        typeof item.strokeDashArray[1] === 'number') {
                        lineSvgProps.strokeDasharray = item.strokeDashArray;
                    }
                    return _jsx(Path, __assign({}, lineSvgProps), index);
                })) : animateOnDataChange && animatedPath ? (props.noData ? null : _jsx(AnimatedPath, __assign({}, lineSvgPropsOuter))) : (props.noData ? null : _jsx(Path, __assign({}, lineSvgPropsOuter))), renderSpecificVerticalLines(data), renderSpecificVerticalLines(data2), renderSpecificVerticalLines(data3), renderSpecificVerticalLines(data4), renderSpecificVerticalLines(data5), (_b = dataSet === null || dataSet === void 0 ? void 0 : dataSet.map(function (set) { return renderSpecificVerticalLines(set === null || set === void 0 ? void 0 : set.data); })) !== null && _b !== void 0 ? _b : null, renderDataPoints(hideDataPoints, data, propsData, dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText), showArrow && (_jsx(Path, { d: arrowPoints, fill: arrowFillColor, stroke: arrowStrokeColor, strokeWidth: arrowStrokeWidth }))] }));
    };
    var activatePointers = function (x) {
        var factor = (x - initialSpacing) / spacing;
        factor = Math.round(factor);
        factor = Math.min(factor, (data0 !== null && data0 !== void 0 ? data0 : data).length - 1);
        factor = Math.max(factor, 0);
        var z = initialSpacing +
            spacing * factor -
            (pointerRadius || pointerWidth / 2) -
            1;
        setPointerX(z);
        setPointerIndex(factor);
        var item, y;
        item = (data0 !== null && data0 !== void 0 ? data0 : data)[factor];
        y =
            containerHeight -
                (item.value * containerHeight) / maxValue -
                (pointerRadius || pointerHeight / 2) +
                10;
        setPointerY(y);
        setPointerItem(item);
        if (data2 && data2.length) {
            item = data2[factor];
            if (item) {
                y =
                    containerHeight -
                        (item.value * containerHeight) / maxValue -
                        (pointerRadius || pointerHeight / 2) +
                        10;
                setPointerY2(y);
                setPointerItem2(item);
            }
        }
        if (data3 && data3.length) {
            item = data3[factor];
            if (item) {
                y =
                    containerHeight -
                        (item.value * containerHeight) / maxValue -
                        (pointerRadius || pointerHeight / 2) +
                        10;
                setPointerY3(y);
                setPointerItem3(item);
            }
        }
        if (data4 && data4.length) {
            item = data4[factor];
            if (item) {
                y =
                    containerHeight -
                        (item.value * containerHeight) / maxValue -
                        (pointerRadius || pointerHeight / 2) +
                        10;
                setPointerY4(y);
                setPointerItem4(item);
            }
        }
        if (data5 && data5.length) {
            item = data5[factor];
            if (item) {
                y =
                    containerHeight -
                        (item.value * containerHeight) / maxValue -
                        (pointerRadius || pointerHeight / 2) +
                        10;
                setPointerY5(y);
                setPointerItem5(item);
            }
        }
        if (secondaryData === null || secondaryData === void 0 ? void 0 : secondaryData.length) {
            item = secondaryData[factor];
            if (item) {
                y =
                    containerHeight -
                        (item.value * containerHeight) / secondaryMaxValue -
                        (pointerRadius || pointerHeight / 2) +
                        10;
                setSecondaryPointerY(y);
                // @ts-ignore
                setSecondaryPointerItem(item);
            }
        }
        if (dataSet === null || dataSet === void 0 ? void 0 : dataSet.length) {
            var pointerItemsForSetLocal_1 = [];
            var secondaryPointerItemsForSetLocal_1 = [];
            var ysForDataSet = dataSet.map(function (set) {
                var item = set.data[factor];
                if (set.isSecondary) {
                    secondaryPointerItemsForSetLocal_1.push(item);
                }
                else {
                    pointerItemsForSetLocal_1.push(item);
                }
                var y = item
                    ? containerHeight -
                        (item.value * containerHeight) /
                            (set.isSecondary ? secondaryMaxValue : maxValue) -
                        (pointerRadius || pointerHeight / 2) +
                        10
                    : 0;
                return y;
            });
            setPointerItemsForSet(pointerItemsForSetLocal_1);
            setSecondaryPointerItemsForSet(secondaryPointerItemsForSetLocal_1);
            setPointerYsForDataSet(ysForDataSet);
        }
    };
    var renderLine = function (containerHeightIncludingBelowXAxis, zIndex, points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, hideDataPoints, paramData, propsData, dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText, key) {
        return (_jsx(View, { onMoveShouldSetResponder: function (evt) { return (pointerConfig ? true : false); }, onResponderGrant: function (evt) {
                if (!pointerConfig)
                    return;
                setResponderStartTime(evt.timeStamp);
                if (activatePointersOnLongPress) {
                    return;
                }
                var x = evt.nativeEvent.locationX;
                activatePointers(x);
            }, onResponderMove: function (evt) {
                if (!pointerConfig)
                    return;
                if (activatePointersOnLongPress &&
                    evt.timeStamp - responderStartTime < activatePointersDelay) {
                    return;
                }
                else {
                    setResponderActive(true);
                }
                var x = evt.nativeEvent.locationX;
                if (!activatePointersOnLongPress &&
                    x > (props.width || Dimensions.get('window').width))
                    return;
                activatePointers(x);
            }, 
            // onResponderReject={evt => {
            //   console.log('evt...reject.......',evt);
            // }}
            onResponderEnd: function (evt) {
                // console.log('evt...end.......',evt);
                setResponderStartTime(0);
                setPointerIndex(-1);
                setResponderActive(false);
                if (!persistPointer)
                    setTimeout(function () { return setPointerX(0); }, pointerVanishDelay);
            }, onResponderTerminationRequest: function (evt) { return false; }, 
            // onResponderTerminate={evt => {
            //   console.log('evt...terminate.......',evt);
            // }}
            // onResponderRelease={evt => {
            //   setResponderStartTime(0);
            //   setResponderActive(false);
            //   setTimeout(() => setPointerX(0), pointerVanishDelay);
            // }}
            style: [
                svgWrapperViewStyle,
                { width: totalWidth, height: containerHeightIncludingBelowXAxis },
            ], children: lineSvgComponent(points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, key, hideDataPoints, paramData, propsData, dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText) }, key !== null && key !== void 0 ? key : 0));
    };
    var renderAnimatedLine = function (containerHeightIncludingBelowXAxis, zIndex, points, animatedWidth, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, hideDataPoints, paramsData, propsData, dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText, key) {
        return (_jsx(Animated.View, { onStartShouldSetResponder: function (evt) { return (pointerConfig ? true : false); }, onMoveShouldSetResponder: function (evt) { return (pointerConfig ? true : false); }, onResponderGrant: function (evt) {
                if (!pointerConfig)
                    return;
                setResponderStartTime(evt.timeStamp);
                if (activatePointersOnLongPress) {
                    return;
                }
                var x = evt.nativeEvent.locationX;
                activatePointers(x);
            }, onResponderMove: function (evt) {
                if (!pointerConfig)
                    return;
                if (activatePointersOnLongPress &&
                    evt.timeStamp - responderStartTime < activatePointersDelay) {
                    return;
                }
                else {
                    setResponderActive(true);
                }
                var x = evt.nativeEvent.locationX;
                if (!activatePointersOnLongPress &&
                    x > (props.width || Dimensions.get('window').width))
                    return;
                activatePointers(x);
            }, 
            // onResponderReject={evt => {
            //   console.log('evt...reject.......',evt);
            // }}
            onResponderEnd: function (evt) {
                // console.log('evt...end.......',evt);
                setResponderStartTime(0);
                setPointerIndex(-1);
                setResponderActive(false);
                if (!persistPointer)
                    setTimeout(function () { return setPointerX(0); }, pointerVanishDelay);
            }, onResponderTerminationRequest: function (evt) { return false; }, 
            // onResponderTerminate={evt => {
            //   console.log('evt...terminate.......',evt);
            // }}
            // onResponderRelease={evt => {
            //   setResponderStartTime(0);
            //   setResponderActive(false);
            //   setTimeout(() => setPointerX(0), pointerVanishDelay);
            // }}
            style: [
                svgWrapperViewStyle,
                { width: animatedWidth, height: containerHeightIncludingBelowXAxis },
            ], children: lineSvgComponent(points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, key, hideDataPoints, paramsData, propsData, dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText) }, key !== null && key !== void 0 ? key : 0));
    };
    var remainingScrollViewProps = {
        onScroll: function (ev) {
            var _a;
            (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, ev);
            if (pointerConfig &&
                pointerConfig.activatePointersOnLongPress &&
                pointerConfig.autoAdjustPointerLabelPosition) {
                setScrollX(ev.nativeEvent.contentOffset.x);
            }
        },
    };
    var renderChartContent = function (containerHeightIncludingBelowXAxis) {
        var _a, _b, _c, _d, _e, _f;
        return (_jsxs(_Fragment, { children: [dataSet
                    ? pointsFromSet.length
                        ? dataSet.map(function (set, index) {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
                            if (isAnimated) {
                                return renderAnimatedLine(containerHeightIncludingBelowXAxis, (_a = set.zIndex) !== null && _a !== void 0 ? _a : zIndex1, pointsFromSet[index], widthValue, (_b = set.thickness) !== null && _b !== void 0 ? _b : thickness1, (_c = set.color) !== null && _c !== void 0 ? _c : color1, fillPointsFromSet[index], (_d = set.startFillColor) !== null && _d !== void 0 ? _d : startFillColor1, (_e = set.endFillColor) !== null && _e !== void 0 ? _e : endFillColor1, (_f = set.startOpacity) !== null && _f !== void 0 ? _f : startOpacity1, (_g = set.endOpacity) !== null && _g !== void 0 ? _g : endOpacity1, (_h = set.strokeDashArray) !== null && _h !== void 0 ? _h : strokeDashArray1, set.showArrow || props.showArrows, arrowPointsFromSet[index], arrowStrokeWidthsFromSet === null || arrowStrokeWidthsFromSet === void 0 ? void 0 : arrowStrokeWidthsFromSet[index], arrowStrokeColorsFromSet === null || arrowStrokeColorsFromSet === void 0 ? void 0 : arrowStrokeColorsFromSet[index], arrowFillColorsFromSet === null || arrowFillColorsFromSet === void 0 ? void 0 : arrowFillColorsFromSet[index], (_j = set.hideDataPoints) !== null && _j !== void 0 ? _j : hideDataPoints1, set.data, adjustToOffset(set.data, -((_k = props.yAxisOffset) !== null && _k !== void 0 ? _k : 0)), // need the actual values passed by user
                                (_l = set.dataPointsShape) !== null && _l !== void 0 ? _l : dataPointsShape1, (_m = set.dataPointsWidth) !== null && _m !== void 0 ? _m : dataPointsWidth1, (_o = set.dataPointsHeight) !== null && _o !== void 0 ? _o : dataPointsHeight1, (_p = set.dataPointsColor) !== null && _p !== void 0 ? _p : dataPointsColor1, (_q = set.dataPointsRadius) !== null && _q !== void 0 ? _q : dataPointsRadius1, (_r = set.textColor) !== null && _r !== void 0 ? _r : textColor1, (_s = set.textFontSize) !== null && _s !== void 0 ? _s : textFontSize1, (_t = set.startIndex) !== null && _t !== void 0 ? _t : 0, (_u = set.endIndex) !== null && _u !== void 0 ? _u : set.data.length - 1, set.isSecondary, showValuesAsDataPointsText, index);
                            }
                            else {
                                return renderLine(containerHeightIncludingBelowXAxis, (_v = set.zIndex) !== null && _v !== void 0 ? _v : zIndex1, pointsFromSet[index], (_w = set.thickness) !== null && _w !== void 0 ? _w : thickness1, (_x = set.color) !== null && _x !== void 0 ? _x : color1, fillPointsFromSet[index], (_y = set.startFillColor) !== null && _y !== void 0 ? _y : startFillColor1, (_z = set.endFillColor) !== null && _z !== void 0 ? _z : endFillColor1, (_0 = set.startOpacity) !== null && _0 !== void 0 ? _0 : startOpacity1, (_1 = set.endOpacity) !== null && _1 !== void 0 ? _1 : endOpacity1, (_2 = set.strokeDashArray) !== null && _2 !== void 0 ? _2 : strokeDashArray1, set.showArrow || props.showArrows, arrowPointsFromSet[index], arrowStrokeWidthsFromSet === null || arrowStrokeWidthsFromSet === void 0 ? void 0 : arrowStrokeWidthsFromSet[index], arrowStrokeColorsFromSet === null || arrowStrokeColorsFromSet === void 0 ? void 0 : arrowStrokeColorsFromSet[index], arrowFillColorsFromSet === null || arrowFillColorsFromSet === void 0 ? void 0 : arrowFillColorsFromSet[index], (_3 = set.hideDataPoints) !== null && _3 !== void 0 ? _3 : hideDataPoints1, set.data, adjustToOffset(set.data, -((_4 = props.yAxisOffset) !== null && _4 !== void 0 ? _4 : 0)), // need the actual values passed by user
                                (_5 = set.dataPointsShape) !== null && _5 !== void 0 ? _5 : dataPointsShape1, (_6 = set.dataPointsWidth) !== null && _6 !== void 0 ? _6 : dataPointsWidth1, (_7 = set.dataPointsHeight) !== null && _7 !== void 0 ? _7 : dataPointsHeight1, (_8 = set.dataPointsColor) !== null && _8 !== void 0 ? _8 : dataPointsColor1, (_9 = set.dataPointsRadius) !== null && _9 !== void 0 ? _9 : dataPointsRadius1, (_10 = set.textColor) !== null && _10 !== void 0 ? _10 : textColor1, (_11 = set.textFontSize) !== null && _11 !== void 0 ? _11 : textFontSize1, (_12 = set.startIndex) !== null && _12 !== void 0 ? _12 : 0, (_13 = set.endIndex) !== null && _13 !== void 0 ? _13 : set.data.length - 1, set.isSecondary, showValuesAsDataPointsText, index);
                            }
                        })
                        : null
                    : isAnimated
                        ? renderAnimatedLine(containerHeightIncludingBelowXAxis, zIndex1, points, widthValue, thickness1, color1, fillPoints, startFillColor1, endFillColor1, startOpacity1, endOpacity1, strokeDashArray1, props.showArrow1 || props.showArrows, arrow1Points, arrowStrokeWidth1, arrowStrokeColor1, arrowFillColor1, hideDataPoints1, data, props.data, dataPointsShape1, dataPointsWidth1, dataPointsHeight1, dataPointsColor1, dataPointsRadius1, textColor1, textFontSize1, startIndex1, endIndex1, false, showValuesAsDataPointsText, 0)
                        : renderLine(containerHeightIncludingBelowXAxis, zIndex1, points, thickness1, color1, fillPoints, startFillColor1, endFillColor1, startOpacity1, endOpacity1, strokeDashArray1, props.showArrow1 || props.showArrows, arrow1Points, arrowStrokeWidth1, arrowStrokeColor1, arrowFillColor1, hideDataPoints1, data, props.data, dataPointsShape1, dataPointsWidth1, dataPointsHeight1, dataPointsColor1, dataPointsRadius1, textColor1, textFontSize1, startIndex1, endIndex1, false, showValuesAsDataPointsText, 0), secondaryPoints
                    ? isAnimated
                        ? renderAnimatedLine(containerHeightIncludingBelowXAxis, secondaryLineConfig.zIndex, secondaryPoints, widthValue, secondaryLineConfig.thickness, secondaryLineConfig.color, secondaryFillPoints, secondaryLineConfig.startFillColor, secondaryLineConfig.endFillColor, secondaryLineConfig.startOpacity, secondaryLineConfig.endOpacity, secondaryLineConfig.strokeDashArray, secondaryLineConfig.showArrow, secondaryArrowPoints, (_a = secondaryLineConfig.arrowConfig) === null || _a === void 0 ? void 0 : _a.strokeWidth, (_b = secondaryLineConfig.arrowConfig) === null || _b === void 0 ? void 0 : _b.strokeColor, (_c = secondaryLineConfig.arrowConfig) === null || _c === void 0 ? void 0 : _c.fillColor, secondaryLineConfig.hideDataPoints, secondaryData, props.secondaryData, secondaryLineConfig.dataPointsShape, secondaryLineConfig.dataPointsWidth, secondaryLineConfig.dataPointsHeight, secondaryLineConfig.dataPointsColor, secondaryLineConfig.dataPointsRadius, secondaryLineConfig.textColor, secondaryLineConfig.textFontSize, secondaryLineConfig.startIndex, secondaryLineConfig.endIndex, true, secondaryLineConfig.showValuesAsDataPointsText, 6)
                        : renderLine(containerHeightIncludingBelowXAxis, secondaryLineConfig.zIndex, secondaryPoints, secondaryLineConfig.thickness, secondaryLineConfig.color, secondaryFillPoints, secondaryLineConfig.startFillColor, secondaryLineConfig.endFillColor, secondaryLineConfig.startOpacity, secondaryLineConfig.endOpacity, secondaryLineConfig.strokeDashArray, secondaryLineConfig.showArrow, secondaryArrowPoints, (_d = secondaryLineConfig.arrowConfig) === null || _d === void 0 ? void 0 : _d.strokeWidth, (_e = secondaryLineConfig.arrowConfig) === null || _e === void 0 ? void 0 : _e.strokeColor, (_f = secondaryLineConfig.arrowConfig) === null || _f === void 0 ? void 0 : _f.fillColor, secondaryLineConfig.hideDataPoints, secondaryData, props.secondaryData, secondaryLineConfig.dataPointsShape, secondaryLineConfig.dataPointsWidth, secondaryLineConfig.dataPointsHeight, secondaryLineConfig.dataPointsColor, secondaryLineConfig.dataPointsRadius, secondaryLineConfig.textColor, secondaryLineConfig.textFontSize, secondaryLineConfig.startIndex, secondaryLineConfig.endIndex, true, secondaryLineConfig.showValuesAsDataPointsText, 6)
                    : null, points2
                    ? isAnimated
                        ? renderAnimatedLine(containerHeightIncludingBelowXAxis, zIndex2, points2, widthValue2, thickness2, color2, fillPoints2, startFillColor2, endFillColor2, startOpacity2, endOpacity2, strokeDashArray2, props.showArrow2 || props.showArrows, arrow2Points, arrowStrokeWidth2, arrowStrokeColor2, arrowFillColor2, hideDataPoints2, data2, props.data2, dataPointsShape2, dataPointsWidth2, dataPointsHeight2, dataPointsColor2, dataPointsRadius2, textColor2, textFontSize2, startIndex2, endIndex2, false, showValuesAsDataPointsText, 1)
                        : renderLine(containerHeightIncludingBelowXAxis, zIndex2, points2, thickness2, color2, fillPoints2, startFillColor2, endFillColor2, startOpacity2, endOpacity2, strokeDashArray2, props.showArrow2 || props.showArrows, arrow2Points, arrowStrokeWidth2, arrowStrokeColor2, arrowFillColor2, hideDataPoints2, data2, props.data2, dataPointsShape2, dataPointsWidth2, dataPointsHeight2, dataPointsColor2, dataPointsRadius2, textColor2, textFontSize2, startIndex2, endIndex2, false, showValuesAsDataPointsText, 1)
                    : null, points3
                    ? isAnimated
                        ? renderAnimatedLine(containerHeightIncludingBelowXAxis, zIndex3, points3, widthValue3, thickness3, color3, fillPoints3, startFillColor3, endFillColor3, startOpacity3, endOpacity3, strokeDashArray3, props.showArrow3 || props.showArrows, arrow3Points, arrowStrokeWidth3, arrowStrokeColor3, arrowFillColor3, hideDataPoints3, data3, props.data3, dataPointsShape3, dataPointsWidth3, dataPointsHeight3, dataPointsColor3, dataPointsRadius3, textColor3, textFontSize3, startIndex3, endIndex3, false, showValuesAsDataPointsText, 2)
                        : renderLine(containerHeightIncludingBelowXAxis, zIndex3, points3, thickness3, color3, fillPoints3, startFillColor3, endFillColor3, startOpacity3, endOpacity3, strokeDashArray3, props.showArrow3 || props.showArrows, arrow3Points, arrowStrokeWidth3, arrowStrokeColor3, arrowFillColor3, hideDataPoints3, data3, props.data3, dataPointsShape3, dataPointsWidth3, dataPointsHeight3, dataPointsColor3, dataPointsRadius3, textColor3, textFontSize3, startIndex3, endIndex3, false, showValuesAsDataPointsText, 2)
                    : null, points4
                    ? isAnimated
                        ? renderAnimatedLine(containerHeightIncludingBelowXAxis, zIndex4, points4, widthValue4, thickness4, color4, fillPoints4, startFillColor4, endFillColor4, startOpacity4, endOpacity4, strokeDashArray4, props.showArrow4 || props.showArrows, arrow4Points, arrowStrokeWidth4, arrowStrokeColor4, arrowFillColor4, hideDataPoints4, data4, props.data4, dataPointsShape4, dataPointsWidth4, dataPointsHeight4, dataPointsColor4, dataPointsRadius4, textColor4, textFontSize4, startIndex4, endIndex4, false, showValuesAsDataPointsText, 3)
                        : renderLine(containerHeightIncludingBelowXAxis, zIndex4, points4, thickness4, color4, fillPoints4, startFillColor4, endFillColor4, startOpacity4, endOpacity4, strokeDashArray4, props.showArrow4 || props.showArrows, arrow4Points, arrowStrokeWidth4, arrowStrokeColor4, arrowFillColor4, hideDataPoints4, data4, props.data4, dataPointsShape4, dataPointsWidth4, dataPointsHeight4, dataPointsColor4, dataPointsRadius4, textColor4, textFontSize4, startIndex4, endIndex4, false, showValuesAsDataPointsText, 3)
                    : null, points5
                    ? isAnimated
                        ? renderAnimatedLine(containerHeightIncludingBelowXAxis, zIndex5, points5, widthValue5, thickness5, color5, fillPoints5, startFillColor5, endFillColor5, startOpacity5, endOpacity5, strokeDashArray5, props.showArrow5 || props.showArrows, arrow5Points, arrowStrokeWidth5, arrowStrokeColor5, arrowFillColor5, hideDataPoints5, data5, props.data5, dataPointsShape5, dataPointsWidth5, dataPointsHeight5, dataPointsColor5, dataPointsRadius5, textColor5, textFontSize5, startIndex5, endIndex5, false, showValuesAsDataPointsText, 4)
                        : renderLine(containerHeightIncludingBelowXAxis, zIndex5, points5, thickness5, color5, fillPoints5, startFillColor5, endFillColor5, startOpacity5, endOpacity5, strokeDashArray5, props.showArrow5 || props.showArrows, arrow5Points, arrowStrokeWidth5, arrowStrokeColor5, arrowFillColor5, hideDataPoints5, data5, props.data5, dataPointsShape5, dataPointsWidth5, dataPointsHeight5, dataPointsColor5, dataPointsRadius5, textColor5, textFontSize5, startIndex5, endIndex5, false, showValuesAsDataPointsText, 4)
                    : null, intersectionAreaConfig &&
                    (props.areaChart || (props.areaChart1 && props.areaChart2))
                    ? renderIntersection()
                    : null, pointerX > 0 ? (_jsxs(View, { pointerEvents: pointerEvents !== null && pointerEvents !== void 0 ? pointerEvents : 'none', style: {
                        position: 'absolute',
                        height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
                        bottom: 58 + labelsExtraHeight + xAxisLabelsVerticalShift - overflowTop,
                        // width: totalWidth,
                        zIndex: 20,
                    }, children: [!stripOverPointer && renderStripAndLabel(), dataSet ? (renderPointer(0, true)) : (
                        // dataSet.map((set, index) => renderPointer(index))
                        _jsxs(_Fragment, { children: [renderPointer(1), points2 ? renderPointer(2) : null, points3 ? renderPointer(3) : null, points4 ? renderPointer(4) : null, points5 ? renderPointer(5) : null, secondaryPoints ? renderPointer(6) : null, stripOverPointer && renderStripAndLabel()] }))] })) : null, (data0 !== null && data0 !== void 0 ? data0 : data).map(function (item, index) {
                    var _a, _b, _c, _d, _e, _f;
                    var secondaryLabel = (_c = (_a = item.secondaryLabel) !== null && _a !== void 0 ? _a : (_b = secondaryXAxis === null || secondaryXAxis === void 0 ? void 0 : secondaryXAxis.labelTexts) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : '';
                    var secondaryLabelTextStyle = (_f = (_e = (_d = item.secondaryLabelTextStyle) !== null && _d !== void 0 ? _d : secondaryXAxis === null || secondaryXAxis === void 0 ? void 0 : secondaryXAxis.labelsTextStyle) !== null && _e !== void 0 ? _e : item.labelTextStyle) !== null && _f !== void 0 ? _f : props.xAxisLabelTextStyle;
                    return (_jsxs(View, { children: [isAnimated
                                ? renderAnimatedLabel(false, index, item.label ||
                                    (props.xAxisLabelTexts && props.xAxisLabelTexts[index]
                                        ? props.xAxisLabelTexts[index]
                                        : ''), item.labelTextStyle || props.xAxisLabelTextStyle, item.labelComponent)
                                : renderLabel(false, index, item.label ||
                                    (props.xAxisLabelTexts && props.xAxisLabelTexts[index]
                                        ? props.xAxisLabelTexts[index]
                                        : ''), item.labelTextStyle || props.xAxisLabelTextStyle, item.labelComponent), secondaryXAxis
                                ? isAnimated
                                    ? renderAnimatedLabel(true, index, secondaryLabel, secondaryLabelTextStyle, item.secondaryLabelComponent)
                                    : renderLabel(true, index, secondaryLabel, secondaryLabelTextStyle, item.secondaryLabelComponent)
                                : null] }, index));
                })] }));
    };
    return (_jsx(BarAndLineChartsWrapper, __assign({}, barAndLineChartsWrapperProps, { dataSet: props.dataSet, scrollRef: scrollRef, animatedWidth: widthValue, renderChartContent: renderChartContent, remainingScrollViewProps: remainingScrollViewProps })));
};
