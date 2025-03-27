package com.app.temp.service;

import com.app.temp.domain.dto.MemberDTO;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Random;

@Service
@RequiredArgsConstructor
@Slf4j
public class InviteService {
    private final JavaMailSender javaMailSender;
    private final HttpSession session;
    private final MemberService memberService;

    //    여러 이메일로 동일한 역할의 초대 이메일 보내기
    public void sendInviteEmails(String[] emails, String role,
                                 String companyName, HttpServletRequest request,
                                 HttpServletResponse response) throws MessagingException, IOException {
        String sender = "temp <contact@temp.com>";

        for (String receiver : emails) {

//            메일 발송
            sendMail(sender, receiver, role, companyName, response);
        }
    }

    //    메일 전송
    public void sendMail(String sender, String receiver,
                         String role, String companyName, HttpServletResponse response) throws MessagingException, IOException {
        String code = createCode(); // 인증 코드 생성

//        쿠키에 인증코드 저장
        Cookie cookie = new Cookie("token", code);
        cookie.setMaxAge(60 * 3);   // 3분동안 유효
        cookie.setPath("/");    // 모든 경로에서 접근 가능
        response.addCookie(cookie);

//        초대자랑 기업정보 세션에 저장
        MemberDTO inviter = (MemberDTO)session.getAttribute("member");
        String inviterName = inviter.getMemberName();

        session.setAttribute("inviterName", inviterName);
        session.setAttribute("companyName", companyName);
        session.setAttribute("role", role);

//        이메일 발송
        String title = companyName + "에서 템프로 초대합니다.";

        StringBuilder body = new StringBuilder();

        body.append("<html lang='en'>");
        body.append("<head>");
        body.append("<meta charset='UTF-8' />");
        body.append("<meta name='viewport' content='width=device-width, initial-scale=1.0' />");
        body.append("<title>사용자 초대</title>");
        body.append("<link rel='stylesheet' as='style' crossorigin href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css' />");
        body.append("</head>");
        body.append("<body>");

        // 중앙 정렬용 table
        body.append("<table cellpadding='0' cellspacing='0' style='width: 100%; align-self: center'>");
        body.append("<tbody>");
        body.append("<tr style='align-self: center; display: flex; justify-content: center;'><td>");

        // 본문용 table
        body.append("<table cellpadding='0' cellspacing='0' style='min-width: 360px; max-width: 720px; border: 2px solid black;'>");

        body.append("<thead style='background-color: #fff'>");
        body.append("<tr><td style='height: 10px; background-color: #000;'></td></tr>");
        body.append("<tr><td style='height: 30px'></td></tr>");
        body.append("<tr><td style='padding-left: 20px; padding-right: 20px; display: flex; justify-content: center;'>");
        body.append("<img src='cid:logoImage' width='80' height='30' alt='로고' style='max-width: 100%; height: auto; vertical-align: top;' />");
        body.append("</td></tr>");
        body.append("<tr><td style='height: 30px'></td></tr>");
        body.append("<tr><td style='font-size: 20px; font-weight: 700; padding-left: 15px; padding-right: 15px; text-align: center;'>");
        body.append("<span>" + companyName + "</span>에서 <span>" + role + "</span> 초대가 왔어요!</td></tr>");
        body.append("<tr><td style='height: 12px'></td></tr>");
        body.append("<tr><td style='font-size: 14px; line-height: 20px; color: #787878; padding-left: 20px; padding-right: 20px; text-align: center;'>");
        body.append("꼭 " + receiver + "를 사용하는 계정으로 로그인해주세요!<br/>링크는 3분후에 만료돼요.</td></tr>");
        body.append("<tr><td style='height: 10px'></td></tr>");
        body.append("</thead>");

        body.append("<tbody style='background-color: white'>");
        body.append("<tr><td style='height: 30px'></td></tr>");
        body.append("<tr><td style='padding-left: 20px; padding-right: 20px; display: flex; justify-content: center;'>");
        body.append("<a href=\"http://13.125.14.57:10000/enterprise/master-invite?code=" + code + "\" style='display: block; width: 70%; height: 40px; background-color: #00C853; text-align: center; line-height: 40px; color: white; font-weight: 700; text-decoration: none; border-radius: 2px; margin-bottom: 30px; padding: 15px;'>");
        body.append("기업 초대 받기");
        body.append("</a>");
        body.append("</td></tr>");
        body.append("</tbody>");

        body.append("</table>");
        body.append("</td></tr>");
        body.append("</tbody>");
        body.append("</table>");

        body.append("</body>");
        body.append("</html>");

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

        mimeMessageHelper.setFrom(sender);
        mimeMessageHelper.setTo(receiver); // 이메일 수신자
        mimeMessageHelper.setSubject(title);
        mimeMessageHelper.setText(body.toString(), true);

        // 로고 이미지 첨부
        FileSystemResource fileSystemResource = new FileSystemResource("src/main/resources/static/images/member/temp-logo.png");
        mimeMessageHelper.addInline("logoImage", fileSystemResource);

        javaMailSender.send(mimeMessage);
        memberService.logout(session);
    }

    // 코드 생성
    private String createCode() {
        String codes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String code = "";
        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            code += codes.charAt(random.nextInt(codes.length()));
        }
        return code;
    }
}
