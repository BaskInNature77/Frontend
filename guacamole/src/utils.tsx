import * as React from 'react';
import { Widget } from 'react-cloudinary-upload-widget';

export interface ProileProps {
    url: string,
    setUrl: any
}


const Proile: React.FunctionComponent<ProileProps> = ({ url, setUrl }) => {
    return (
        <Widget
            sources={['facebook','instagram']}
            resourceType={'raw'}
            uploadPreset={'authors-hyahm'}
            cloudName={'binjswi01'}

            buttonText={'Select Image'}
            style={{
                color: 'white',
                border: 'none',
                width: '120px',
                backgroundColor: '#38a169',
                borderRadius: '4px',
                height: '40px',
                fontFamily: "'Lexend', sans-serif",
                fontSize: "16px",
                marginBottom: "5px"
            }}
            folder={'my_folder'}
            cropping={false}
            onSuccess={(res: any) => setUrl(res.info.secure_url)}
            onFailure={() => console.log("failureCallBack")}
            logging={false}
            customPublicId={'sample'}
            // eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
            use_filename={false}
        />
    );
}

export default Proile;