function toggleCheckbox(element) {
            element.classList.toggle('checked');
        }


    const companyCert = document.getElementById("req_certification")

    companyCert.addEventListener("click", ()=>{
        // 인증 알고리즘
        // 만약 사업자등록증명원 선택 창에서 나중에 인증할게요를 선택한 경우.
        alert("인증되었습니다!")
    })

    const managerEdit = document.querySelector(".manageredit")

    managerEdit.addEventListener('click',() =>{
        // 인증 알고리즘.
        // 문자메시지 인증
        alert("변경이 완료되었습니다.")
    })

    const passwordChange = document.getElementById("btnEditPassword")

    passwordChange.addEventListener('click',()=>{
        // 비밀번호 변경 창.
        alert("비밀번호가 변경되었습니다!")
    })

    const emailChange = document.getElementById("btnEditEmail")
    emailChange.addEventListener('click',() =>{
        alert("이메일이 변경되었습니다!")
    })


 function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                    document.getElementById("address").style.display = "none";
                    document.getElementById("address_sebu").style.display = "none";
                    document.getElementById("new_address").value = addr;
                                      
                    document.getElementById("new_address_details").focus();
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                    document.getElementById("address").style.display = "block";
                    document.getElementById("address_sebu").style.display = "block";
                    document.getElementById("new_address").style.display = "none";
                    document.getElementById("new_address_details").style.display = "none";
                    document.getElementById("address").value = addr;
                    document.getElementById("address_sebu").focus();
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                // if(data.userSelectedType === 'R'){
                //     // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                //     // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                //     if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                //         extraAddr += data.bname;
                //     }
                //     // 건물명이 있고, 공동주택일 경우 추가한다.
                //     if(data.buildingName !== '' && data.apartment === 'Y'){
                //         extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                //     }
                //     // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                //     if(extraAddr !== ''){
                //         extraAddr = ' (' + extraAddr + ')';
                //     }
                //     // 조합된 참고항목을 해당 필드에 넣는다.
                //     document.getElementById("sample6_extraAddress").value = extraAddr;
                
                // } else {
                //     document.getElementById("sample6_extraAddress").value = '';
                // }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                // document.getElementById('sample6_postcode').value = data.zonecode;
                
                // 커서를 상세주소 필드로 이동한다.
                
            }
        }).open();
    }

