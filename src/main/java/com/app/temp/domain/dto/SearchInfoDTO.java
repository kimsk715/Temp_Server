package com.app.temp.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ToString
@NoArgsConstructor
// 프로그램 검색시 필요한 정보를 모아놓은 DTO
// 검색바의 키워드, 로그인된 경우에는 회원의 id, 카테고리 선택시에는 선택된 카테고리
public class SearchInfoDTO {
    private Long memberId;
    private String keyword;
    private String[] categories;
}
