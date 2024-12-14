import "./Rateaproduct.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Rateaproduct = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0); // State untuk menyimpan nilai rating

    // Fungsi untuk mengatur rating
    const handleRating = (index) => {
        setRating(index);
    };

    // Fungsi untuk menangani klik tombol
    const handleSendClick = () => {
        console.log(`Tombol 'Send Your Rating' telah diklik. Rating yang diberikan: ${rating}`);
    };

    return (
        <>  <div className="backlogin" onClick={() => navigate(-1)}>
                Back
            </div>
            <div className="allrateproduct">
                <div className="namaproduk">
                    TLTSN [OE] CALISTA Flatshoes Sepatu Wanita Dark Grey [TSN0002189.C0076] - Dark Grey, 39
                </div>
                <div className="bintang">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                        <span
                            key={index}
                            className={`star ${index < rating ? 'active' : ''}`}
                            onClick={() => handleRating(index + 1)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <p>Rate: {rating}</p> {/* Menampilkan nilai rating */}
                <div className="tombolsend" onClick={handleSendClick}>
                    Send Your Rating
                </div>
            </div>
        </>
    );
};

export default Rateaproduct;
