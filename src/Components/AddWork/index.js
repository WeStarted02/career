import { useState } from "react";
import "./index.css"

function AddWork() {
    const ishVaqti = useState("Uydan");
    const ishTuri = useState("Uydan");
    return (
        <div className="addWorkForm">
            <h1>E'lon ber</h1>
            <div class="mb-3">
                <label className="form-label">Lavozim</label>
                <input type="text" class="form-control" placeholder="Ofitsiant, Dasturchi, Sotuvchi" />
            </div>

            <div className="dropdownA">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Ish turi
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Uydan</a></li>
                    <li><a class="dropdown-item" href="#">Ofistan</a></li>
                    <li><a class="dropdown-item" href="#">Yarim ofis</a></li>
                </ul>
                <p>{ishTuri}</p>
            </div>

            <div className="dropdownA">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Ish vaqti
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Part time</a></li>
                    <li><a class="dropdown-item" href="#">Yarim stavka </a></li>
                    <li><a class="dropdown-item" href="#">To'liq stavkali</a></li>
                    <li><a class="dropdown-item" href="#">Ixtiyoriy</a></li>
                </ul>
                <p>{ishVaqti}</p>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">So'm</span>
                <input type="number" class="form-control" placeholder="Maosh miqdorini So'm hisobida kiring!!" aria-label="Maoshni kirishda Uzbekiston so'mi hisobida kiring!!" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Ishni tasviri</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Hurmatli Ofitsiant Nomzod,
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
        </div>
    );
}

export default AddWork;