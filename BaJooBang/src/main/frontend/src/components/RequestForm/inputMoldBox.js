import React, {useState} from 'react';
import './moldBox.css';
import { ReactComponent as Plus } from '../../components/images/plus_gray.svg';

function InputMoldBox({ title, complete, savedState, onChange, type }) {
    const [image, setImage] = useState(null); // 업로드된 이미지 상태
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 상태

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
        <div className='moldBox'>
            {title}
            <div className="inputImageMold">
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
                                id="imageUpload"
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="imageUpload" className="molduploadLabel">
                                <Plus style={{ marginRight: '5px' }} />
                                <p style={{ color: '#A1A1A1', fontSize: '13px' }}>사진 업로드</p>
                            </label>
                        </>
                    )}
                </div>
            {isModalOpen && (
                <div className="moldmodal" onClick={toggleModal}>
                    <span className="close">&times;</span>
                    <img className="moldmodalContent" src={image} alt="Modal" />
                </div>
            )}
        </div>
    );
}

export default InputMoldBox;
