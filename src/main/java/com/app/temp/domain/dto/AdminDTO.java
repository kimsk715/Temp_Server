package com.app.temp.domain.dto;

import com.app.temp.domain.vo.AdminVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class AdminDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String adminId;
    private String adminPassword;

    public AdminVO toVO(){
        AdminVO adminVO = new AdminVO();

        adminVO.setId(id);
        adminVO.setAdminId(adminId);
        adminVO.setAdminPassword(adminPassword);

        return adminVO;
    }
}
