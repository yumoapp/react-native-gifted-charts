import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { renderSpecificVerticalLines } from './renderSpecificVerticalLines';
import { renderDataPoints } from './renderDataPoints';
import { renderSpecificDataPoints } from './renderSpecificDataPoints';
var RenderLineInBarChart = function (props) {
    var _a;
    var yAxisLabelWidth = props.yAxisLabelWidth, initialSpacing = props.initialSpacing, spacing = props.spacing, containerHeight = props.containerHeight, lineConfig = props.lineConfig, maxValue = props.maxValue, animatedWidth = props.animatedWidth, lineBehindBars = props.lineBehindBars, points = props.points, arrowPoints = props.arrowPoints, data = props.data, totalWidth = props.totalWidth, barWidth = props.barWidth, labelsExtraHeight = props.labelsExtraHeight, xAxisLabelsVerticalShift = props.xAxisLabelsVerticalShift, selectedIndex = props.selectedIndex;
    var firstBarWidth = (_a = data[0].barWidth) !== null && _a !== void 0 ? _a : barWidth;
    var dataPointsProps = {
        data: data,
        lineConfig: lineConfig,
        barWidth: barWidth,
        containerHeight: containerHeight,
        maxValue: maxValue,
        firstBarWidth: firstBarWidth,
        yAxisLabelWidth: yAxisLabelWidth,
        spacing: spacing,
        selectedIndex: selectedIndex,
    };
    var specificVerticalLinesProps = {
        data: data,
        barWidth: barWidth,
        yAxisLabelWidth: yAxisLabelWidth,
        initialSpacing: initialSpacing,
        spacing: spacing,
        containerHeight: containerHeight,
        lineConfig: lineConfig,
        maxValue: maxValue,
    };
    var specificDataPointsProps = {
        data: data,
        barWidth: barWidth,
        firstBarWidth: firstBarWidth,
        yAxisLabelWidth: yAxisLabelWidth,
        lineConfig: lineConfig,
        spacing: spacing,
        containerHeight: containerHeight,
        maxValue: maxValue,
    };
    var renderAnimatedLine = function () {
        var _a, _b, _c;
        // console.log('animatedWidth is-------->', animatedWidth);
        return (_jsx(Animated.View, { pointerEvents: "none", style: {
                position: 'absolute',
                height: containerHeight + 10,
                left: 6 - yAxisLabelWidth,
                bottom: 50 + xAxisLabelsVerticalShift, //stepHeight * -0.5 + xAxisThickness,
                width: animatedWidth,
                zIndex: lineBehindBars ? -1 : 100000,
                // backgroundColor: 'wheat',
            }, children: _jsxs(Svg, { children: [_jsx(Path, { d: points, fill: "none", stroke: lineConfig.color, strokeWidth: lineConfig.thickness }), renderSpecificVerticalLines(specificVerticalLinesProps), !lineConfig.hideDataPoints
                        ? renderDataPoints(dataPointsProps)
                        : renderSpecificDataPoints(specificDataPointsProps), lineConfig.showArrow && (_jsx(Path, { d: arrowPoints, fill: (_a = lineConfig.arrowConfig) === null || _a === void 0 ? void 0 : _a.fillColor, stroke: (_b = lineConfig.arrowConfig) === null || _b === void 0 ? void 0 : _b.strokeColor, strokeWidth: (_c = lineConfig.arrowConfig) === null || _c === void 0 ? void 0 : _c.strokeWidth }))] }) }));
    };
    var renderLine = function () {
        var _a, _b, _c;
        return (_jsx(View, { pointerEvents: "none", style: {
                position: 'absolute',
                height: containerHeight + 10 + labelsExtraHeight,
                left: 6 - yAxisLabelWidth,
                bottom: 50 + xAxisLabelsVerticalShift, //stepHeight * -0.5 + xAxisThickness,
                width: totalWidth,
                zIndex: lineBehindBars ? -1 : 100000,
                // backgroundColor: 'rgba(200,150,150,0.1)'
            }, children: _jsxs(Svg, { children: [_jsx(Path, { d: points, fill: "none", stroke: lineConfig.color, strokeWidth: lineConfig.thickness }), renderSpecificVerticalLines(specificVerticalLinesProps), !lineConfig.hideDataPoints
                        ? renderDataPoints(dataPointsProps)
                        : renderSpecificDataPoints(specificDataPointsProps), lineConfig.showArrow && (_jsx(Path, { d: arrowPoints, fill: (_a = lineConfig.arrowConfig) === null || _a === void 0 ? void 0 : _a.fillColor, stroke: (_b = lineConfig.arrowConfig) === null || _b === void 0 ? void 0 : _b.strokeColor, strokeWidth: (_c = lineConfig.arrowConfig) === null || _c === void 0 ? void 0 : _c.strokeWidth }))] }) }));
    };
    if (lineConfig.isAnimated) {
        return renderAnimatedLine();
    }
    return renderLine();
};
export default RenderLineInBarChart;
