import React, { useState } from 'react';
import './creditLine.css';

function CreditLine() {
  const [Input1, setImput1] = useState(0);
  const [Input2, setImput2] = useState(0);
  const [Input3, setImput3] = useState(0);
  const [Input4, setImput4] = useState(0);
  const [Input5, setImput5] = useState(0);
  const [Input6, setInput6] = useState(0);
  const [Input7, setInput7] = useState(0);
  const [Input8, setInput8] = useState(0);
  const [result, setresult] = useState(0);

  const calculate = () => {
    const result1 =
      parseFloat(Input3) +
      parseFloat(Input4) -
      parseFloat(Input2)-
      parseFloat(Input5) -
      parseFloat(Input6) -
      parseFloat(Input7) -
      parseFloat(Input8);
    setresult(result1);
  };

  // دالة النسخ
  const copyToClipboard = () => {
    const textToCopy = `مرسولنا قيمة الطلب ${Input2} ريال وقيمة العرض الخاصه بك ${Input5} ريال قبل استلام هذا الطلب ${Input1} كان يوجد عليك مديونيه بقيمة ${Input7} ريال وتم خصم منك ضريبه في هذا الطلب ${Input1} بقيمة ${Input6} ريال وتم تحويل لك في محفظتك البنكية قيمه ${Input3} ريال ثم تم اضافه لك ${Input4} ريال اذا لا يوجد اي مشكله مرسولنه في هذا الطلب ${Input1}`;
    
    // إنشاء عنصر نصي مؤقت
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;

    // إضافة العنصر المؤقت إلى الجسم
    document.body.appendChild(tempInput);

    // تحديد النص داخل العنصر المؤقت
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // لنسخ النص بشكل موثوق في الهواتف

    // نسخ النص إلى الحافظة
    document.execCommand("copy");

    // إزالة العنصر المؤقت من الجسم
    document.body.removeChild(tempInput);

    // تأكيد النسخ (اختياري)
    alert("تم نسخ النص إلى الحافظة!");
  };

  return (
    <div className='credit_cover'>
      <div className='credit'>
        <h3>Order number </h3>
        <input type='number' value={Input1} onChange={(e) => setImput1(e.target.value)} />
        <h3> Order amount </h3>
        <input type='number' value={Input2} onChange={(e) => setImput2(e.target.value)} />
        <h3>The value that was transferred to the driver in his bank account </h3>
        <input type='number' value={Input3} onChange={(e) => setImput3(e.target.value)} />
        <h3>Any value has been added </h3>
        <input type='number' value={Input4} onChange={(e) => setImput4(e.target.value)} />
        <h3>Delivery offer for couriers </h3>
        <input type='number' value={Input5} onChange={(e) => setImput5(e.target.value)} />
        <h3>Vat and commission </h3>
        <input type='number' value={Input6} onChange={(e) => setInput6(e.target.value)} />
        <h3> Previous indebtedness before receiving this order </h3>
        <input type='number' value={Input7} onChange={(e) => setInput7(e.target.value)} />
        <h3>The value of an order was received and deducted before the end of this order </h3>
        <input type='number' value={Input8} onChange={(e) => setInput8(e.target.value)} />
      </div>
      <button onClick={calculate}>Result</button>
      <h2>{result} النتيجه </h2>
      <div className='script'>
        <p>مرسولنا قيمة الطلب {Input2} ريال وقيمة العرض الخاصه بك {Input5} ريال قبل استلام هذا الطلب {Input1} كان يوجد عليك مديونيه بقيمة {Input7} ريال وتم خصم منك ضريبه في هذا الطلب {Input1} بقيمة {Input6} ريال وتم تحويل لك في محفظتك البنكية قيمه {Input3} ريال ثم تم اضافه لك {Input4} ريال اذا لا يوجد اي مشكله مرسولنه في هذا الطلب {Input1}</p>
        <button onClick={copyToClipboard}>نسخ النص</button> {/* زر النسخ */}
      </div>
    </div>
  );
}

export default CreditLine;
