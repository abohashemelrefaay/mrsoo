import React, { useState } from 'react';
import './store.css'; // ملف CSS

function Store() {
  const [isVisible, setIsVisible] = useState(false);
  const [isM4B, setIsisM4B] = useState(false);
  const [isNonM4B, setIsNonM4B] = useState(false);

  // دالة لتغيير حالة إظهار الـ div
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };
  const toggleM4B = () => {
    setIsisM4B(!isM4B);
  };
  const toggleNonM4B = () => {
    setIsNonM4B(!isNonM4B);
  };

  return (
    <div className="container">
      {/* div الأول الذي نضغط عليه */}
      <div className="clickable-div" onClick={toggleDiv}>
      المتجر مغلق | Store is close     
      </div>

      {/* div الذي يظهر ويختفي */}
      {isVisible && (
        <div className="toggle-div">
          <div className='m4b' onClick={toggleM4B}>m4b
          {isM4B &&(
            <div className='contantm4b'>
            
              <h3>وصل المرسول الي المتجر وارفق صوره واضحه </h3>
              <ol>
              <li> يجب ان يتم الاتصال بالمتجر للتحقق من صحة شكوى المرسول </li>
              <li> إلغاء الطلب مع إختيار سبب الإلغاء الصحيح </li>
              <li> تعويض المرسول بـ 5 ريال اذا  لم يكن   
              فل تايم بناء على شروط التعويض</li>
              <li> تطبيق غرامة على الشريك بناء على الشروط</li>
              </ol>
              <h3> لم يصل المرسول الي المتجر او لم يرفق صوره  </h3>
              <ol>
              <li> إلإعتذار من المرسول  </li>
              <li>  اسناد الطلب لمرسول اخر بشرط ان يتم التحقق هل تم رفع شكوى من قبل العميل على الطلب ( في حال قام العميل  برفع شكوى أو تم إبلاغه من قبل المرسول بأن المتجر مغلق يتم التواصل معه وابلاغه بانه سيتم اسناد الطلب مع مرسول اخر ) </li>
              <li> إنذار  المرسول في حال لم يصل إلى المتجر  
              فل تايم بناء على شروط التعويض</li>
          
              </ol>

            </div>
          )}
        </div>
        <div className='nonm4B' onClick={toggleNonM4B}>nonm4b
        {isNonM4B &&(
            <div className='contantnonm4b' >
                  <h3>وصل المرسول الي المتجر وارفق صوره واضحه </h3>
              <ol>
              <li> إلغاء الطلب مع إختيار سبب الإلغاء الصحيح   </li>
              <li> - تعويض المرسول بـ 5 ريال اذا  لم يكن   
فل تايم بناء على شروط التعويض 
</li>
              <li> تعويض المرسول بـ 5 ريال اذا  لم يكن   
              فل تايم بناء على شروط التعويض</li>
              </ol>
              <h3> لم يصل المرسول الي المتجر او لم يرفق صوره  </h3>
              <ol>
              <li> إلإعتذار من المرسول  </li>
              <li>  اسناد الطلب لمرسول اخر بشرط ان يتم التحقق هل تم رفع شكوى من قبل العميل على الطلب ( في حال قام العميل  برفع شكوى أو تم إبلاغه من قبل المرسول بأن المتجر مغلق يتم التواصل معه وابلاغه بانه سيتم اسناد الطلب مع مرسول اخر ) </li>
              <li> إنذار  المرسول في حال لم يصل إلى المتجر  
              فل تايم بناء على شروط التعويض</li>
          
              </ol>
            </div>
          )}
        </div>
      
        </div>
      )}
    </div>
  );
}

export default Store;
