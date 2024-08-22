import React, { useState, useEffect } from 'react';
import './inputLight.css';
import { ReactComponent as Plus } from '../../components/images/plus_gray.svg';

function InputLight() {
    const [image, setImage] = useState(null); // 업로드된 이미지 상태
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 상태
    const [inputId, setInputId] = useState(''); // 고유한 input id

    useEffect(() => {
        // 고유한 id를 생성하여 상태에 저장
        setInputId(`imageUpload-${Math.random().toString(36).substr(2, 9)}`);
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='inputLightBox'>
            {image ? (
                <img
                    src={image}
                    alt="Uploaded"
                    className="molduploadedImage"
                    onClick={toggleModal} // 클릭하면 모달 창이 열림
                />
            ) : (
                <>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        id={inputId} // 고유한 id 사용
                        style={{ display: 'none' }}
                    />
                    <label htmlFor={inputId} className="molduploadLabel">
                        <Plus style={{ marginRight: '5px' }} />
                        <p style={{ color: '#A1A1A1', fontSize: '13px' }}>사진 업로드</p>
                    </label>
                </>
            )}

            {isModalOpen && (
                <div className="moldmodal" onClick={toggleModal}>
                    <span className="close">&times;</span>
                    <img className="moldmodalContent" src={image} alt="Modal" />
                </div>
            )}
        </div>
    );
}

export default InputLight;
