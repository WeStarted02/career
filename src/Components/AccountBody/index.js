import { useSelector } from 'react-redux';
import './index.css'

function AccountBody() {
    const bgColor = useSelector((state) => state.changeBgColor);
    return (
        <div className='accountBody' >
            <div className='col-1'   >
                <div style={bgColor == "black" ? {background:"#d9d9d9"} : {background:"#737373"}}>
                    <p>Bugun sening kuning!</p>
                    <button className='btn-elon'>E'lonlar</button>
                </div>
            </div>
            <div className='col-2'>
                <div className=''>
                    <h2>Kechmishim</h2>
                    <button className='btn-add'>Qo'shish</button>
                    <p className='ochiqlama'>Bu bo’limda kechmish ish hayotingizni tariflovchi fayl cv’lari yuklang </p>
                    <div className='div-file'>
                        <p>25.02.1099</p>
                        <p className='ochiqlama'>Yuklagan ajoyib CV’laringiz bilan ish e’lonlariga topshiring</p>
                        <button>E'lonlar</button>
                    </div>
                    <button className='mt-2'>Barcha CV'lar</button>
                </div>

                <div>
                    <h2>O’zim haqimda</h2>
                    <p className='ochiqlama'>Bu bo’limda oz’zingizni anglatuvchi qisqa va tushunarli matn kiriting </p>
                    <div className='div-file '>
                        <p >Yuklagan ajoyib CV’laringiz bilan ish el’lonlariga topshiring</p>
                        <button>Qo'shish</button>
                    </div>
                </div>

                <div>
                    <h2>Fayllarim</h2>
                    <button className='btn-add'>Qo'shish</button>
                    <p className='ochiqlama'>Bu bo’limda sizni Kechmishingiz qo’llab quvatlovchi serfikatlarni va faylarni yuklang</p>
                    <div>
                        <ul>
                            <li>
                                <div className='li-div'>
                                    <p>25.02.1099</p>
                                    <p className='ochiqlama'>Yuklagan ajoyib CV’laringiz bilan ish el’lonlariga topshiring</p>
                                    <button>Ko'rish</button>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <button className='mt-1'>Barcha CV'lar</button>
                </div>
            </div>
        </div>
    )
}
export default AccountBody;