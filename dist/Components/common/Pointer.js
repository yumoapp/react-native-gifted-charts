import { jsx as _jsx } from "react/jsx-runtime";
import { View } from 'react-native';
export var Pointer = function (props) {
    var pointerX = props.pointerX, pointerYLocal = props.pointerYLocal, pointerComponent = props.pointerComponent, pointerHeight = props.pointerHeight, pointerRadius = props.pointerRadius, pointerWidth = props.pointerWidth, pointerItemLocal = props.pointerItemLocal, pointerColorLocal = props.pointerColorLocal;
    if (isNaN(pointerYLocal) || typeof pointerYLocal !== 'number')
        return null;
    return (_jsx(View, { style: {
            position: 'absolute',
            left: pointerX + (pointerX.pointerShiftX || 0),
            top: pointerYLocal - 2,
        }, children: pointerComponent ? (pointerComponent()) : (_jsx(View, { style: {
                height: pointerHeight || pointerRadius * 2,
                width: pointerWidth || pointerRadius * 2,
                marginTop: (pointerItemLocal === null || pointerItemLocal === void 0 ? void 0 : pointerItemLocal.pointerShiftY) || 0,
                backgroundColor: pointerColorLocal,
                borderRadius: pointerRadius || 0,
            } })) }));
};
