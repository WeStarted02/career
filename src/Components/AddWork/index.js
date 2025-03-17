import { useEffect, useState } from "react";
import "./index.css"
import axios from "axios";
function AddWork() {
    const [ishVaqti, setIshVaqti] = useState("Uydan");
    const [ishTuri, setIshTuri] = useState("To'liq stavka");
    const [about, setAbout] = useState("");
    const [jobName, setJobName] = useState("");
    const [amount, setAmount] = useState();
    const [location, setLocation] = useState("");


    const handleClick = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/workAdd',
            data: {
                "company_id": 1,
                "salary": amount,
                "location": location,
                "job_name": jobName,
                "working_time": ishVaqti,
                "typeof_working": ishTuri,
                "to_announce_time": null,
                "work_about": about
            }
        });
    }

    return (
        <div className="addWorkForm">
            <h1>E'lon ber</h1>
            <div class="mb-3">
                <label className="form-label">Lavozim</label>
                <input type="text" class="form-control" placeholder="Ofitsiant, Dasturchi, Sotuvchi" onChange={(event) => setJobName(event.target.value)} />
            </div>

            <div className="dropdownA">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Ish turi
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" >
                    <li><a class="dropdown-item" href="#" onClick={(event) => setIshTuri(event.target.textContent)}>Uydan</a></li>
                    <li><a class="dropdown-item" href="#" onClick={(event) => setIshTuri(event.target.textContent)}>Ofistan</a></li>
                    <li><a class="dropdown-item" href="#" onClick={(event) => setIshTuri(event.target.textContent)}>Yarim ofis</a></li>
                </ul>
                <p>{ishTuri}</p>
            </div>

            <div className="dropdownA">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Ish vaqti
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#" onClick={(event) => setIshVaqti(event.target.textContent)}>Part time</a></li>
                    <li><a class="dropdown-item" href="#" onClick={(event) => setIshVaqti(event.target.textContent)}>Yarim stavka </a></li>
                    <li><a class="dropdown-item" href="#" onClick={(event) => setIshVaqti(event.target.textContent)}>To'liq stavkali</a></li>
                    <li><a class="dropdown-item" href="#" onClick={(event) => setIshVaqti(event.target.textContent)}>Ixtiyoriy</a></li>
                </ul>
                <p>{ishVaqti}</p>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">So'm</span>
                <input type="number" class="form-control"
                    placeholder="Maosh miqdorini So'm hisobida kiring!!"
                    aria-label="Maoshni kirishda Uzbekiston so'mi hisobida kiring!!"
                    onChange={(event) => setAmount(event.target.value)} />
            </div>

            <div class="mb-3">
                <label className="form-label">Manzil</label>
                <input type="text" class="form-control" placeholder="Ankara, Toshkent, London"
                    onChange={(event) => setLocation(event.target.value)} />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Ishni tasviri</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"
                    onChange={(event) => setAbout(event.target.value)} placeholder="Hurmatli Ofitsiant Nomzod,
Biz restoranimizda ishlash uchun ofitsiant qidirmoqdamiz va sizning arizangizni baholamoqchimiz. Ofitsiant pozitsiyasi haqida ba'zi tafsilotlar:
Missiya Tavsifi:
Mijozlarni kutib olish va ularni stollariga yo'naltirish.
Menyuni tushuntiring va ovqatlanish bo'yicha takliflar bering.
Buyurtmalarni qabul qilish va ularni oshxonaga yuborish.
Oziq-ovqat xizmatini muntazam va tez bajarish.
Stollarni muntazam tozalash va tartibga solish.
Qidirilgan Malakalar:
U ekstrovert va uning muloqot qobiliyatlari kuchli.
Jamoaviy ishlashga moyil va tez o'rganuvchi.
Tozalik va gigiena haqida ehtiyotkorlik bilan.
Moslashuvchan ish soatlariga moslasha oladi.
Agar siz ushbu ish bilan qiziqsangiz, iltimos, bizga arizangizni aloqa ma'lumotlaringiz bilan birga yuboring. Sizni yaxshiroq bilish uchun uchrashuv tashkil qilishimiz mumkin." rows="3"></textarea>
            </div>
            <div class="container"> <button class="right-button" onClick={handleClick}>E'lon bering</button> </div>
        </div>
    );
}

export default AddWork;