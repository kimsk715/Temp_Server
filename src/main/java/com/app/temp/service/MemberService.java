package com.app.temp.service;

import com.app.temp.domain.dto.*;
import com.app.temp.domain.vo.MemberVO;
import com.app.temp.repository.*;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class MemberService {
    private final MemberDAO memberDAO;
    private final ResumeDAO resumeDAO;
    private final ProgramPagination programPagination;
    private final ReportDAO reportDAO;
    private final ApplyDAO applyDAO;
    private final ProgramDAO programDAO;

//    회원가입
    public void join(MemberDTO memberDTO){
        memberDAO.save(memberDTO.toVO());
    }




//     로그인하면 회원 최근 로그인 시간 갱신
    public void updateMemberRecentLogin(Long id){
        memberDAO.updateMemberRecentLogin(id);
    }

    //    로그아웃(세션에 정보 남길게 있어서 invalidate 쓰면 안댐)
    public String logout(HttpSession session){
        session.removeAttribute("member");
        session.removeAttribute("companyMember");
        session.removeAttribute("company");
        return "redirect:/";
    }

//    회원 탈퇴
    public void memberDelete(Long id){
        memberDAO.deleteMember(id);
    }

    //    이메일로 회원 조회
    public Optional<MemberDTO> getMember(String memberEmail){
        Optional<MemberDTO> member = memberDAO.findByMemberEmail(memberEmail);
        member.ifPresent(members -> members.setResumeList(resumeDAO.findByMemberId(members.getId())));

//        중간에 이력서 추가 --> 회원 정보에 포함되어있으면 프로그램 목록에서 즉시 이력서 제출 가능.
        return memberDAO.findByMemberEmail(memberEmail);
    }

    //  아이디로 회원 조회
    public Optional<MemberDTO> getMemberById(MemberDTO memberDTO){
        return memberDAO.findByMemberId(memberDTO.getId());
    }

    public AdminMemberListDTO getAllAdmin(MemberPagination memberpagination){
        AdminMemberListDTO memberAdminList = new AdminMemberListDTO();
        memberpagination.create(memberDAO.countAll(memberpagination));

        memberAdminList.setMemberPagination(memberpagination);
        memberAdminList.setMemberList(memberDAO.findAllAdmin(memberpagination));
        return memberAdminList;
    }

    public Optional<MemberAdminListDTO> getMemberInfoAdmin(Long id){
        Optional<MemberAdminListDTO> member = memberDAO.findMemberInfoAdmin(id);
        member.ifPresent(admin -> admin.setResumeList(resumeDAO.findByMemberId(admin.getId())));
        member.ifPresent( admin -> admin.setReportDTOList(reportDAO.findReportListDtoByMemberId(admin.getId())));
        member.ifPresent(admin -> admin.setApplyDTOList(programDAO.findAllApplyByMemberId(admin.getId())));
        return member;
    }

    public void set(MemberVO memberVO){
        memberDAO.set(memberVO);
    }
}
