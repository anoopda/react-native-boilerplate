import React from 'react';
import {
    getDeviceInfo
} from './deviceProperties';

const styleGenerator = () => {
    const { type } = getDeviceInfo();
    const isPhone = ((type === 'iosMobile') || (type === 'androidMobile'));
    return ({commonStyle = {} ,phoneStyle = {} ,tabletStyle = {} }) =>{
        return isPhone ? {
            ...commonStyle,...phoneStyle
        }: {   ...commonStyle,...tabletStyle }
    }
}


const detectOrientationChange = () => {
    const [orientation,setOrientation] = useState(null);
}

export const styleGeneratorInstance =  styleGenerator();

