package com.app.temp.service;

import com.app.temp.domain.dto.MemberDTO;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Optional;

@Slf4j
@Service
public class KakaoService {
    //    토큰 발급
    public String getKakaoAccessToken(String code, String type) {
        String accessToken = null;
        String requestURI = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(requestURI);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            StringBuilder stringBuilder = new StringBuilder();
            BufferedWriter bufferedWriter = null;

            String redirectURI = "http://13.125.14.57:10000/kakao/login?type=" + type;

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);

            stringBuilder.append("grant_type=authorization_code");
            stringBuilder.append("&client_id=87bef4c36fab14d5714ce773bdd6f030");
            stringBuilder.append("&redirect_uri=" + redirectURI);
            stringBuilder.append("&code=" + code);

            bufferedWriter = new BufferedWriter(new OutputStreamWriter(connection.getOutputStream()));
            bufferedWriter.write(stringBuilder.toString());
            bufferedWriter.close();

            if(connection.getResponseCode() == 200) {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line = null;
                String result = "";

                while ((line = bufferedReader.readLine()) != null) {
                    result += line;
                }

                JsonElement jsonElement = JsonParser.parseString(result);
                accessToken = jsonElement.getAsJsonObject().get("access_token").getAsString();

                bufferedReader.close();
            }

        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return accessToken;
    }

    //    카카오에서 정보 받아오기
    public Optional<MemberDTO> getKakaoInfo(String token) {
        String accessToken = null;
        String requestURI = "https://kapi.kakao.com/v2/user/me";
        MemberDTO memberDTO = null;

        try {
            URL url = new URL(requestURI);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            StringBuilder stringBuilder = new StringBuilder();

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            connection.setRequestProperty("Authorization", "Bearer " + token);

            if(connection.getResponseCode() == 200) {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line = null;
                String result = "";

                while ((line = bufferedReader.readLine()) != null) {
                    result += line;
                }

                JsonElement jsonElement = JsonParser.parseString(result);
                JsonElement kakaoAccount = jsonElement.getAsJsonObject().get("kakao_account").getAsJsonObject();
                JsonElement profile = kakaoAccount.getAsJsonObject().get("profile");

                memberDTO = new MemberDTO();
                memberDTO.setMemberEmail(kakaoAccount.getAsJsonObject().get("email").getAsString());
                memberDTO.setMemberName(profile.getAsJsonObject().get("nickname").getAsString());
                memberDTO.setMemberProfilePath(profile.getAsJsonObject().get("profile_image_url").getAsString());

                bufferedReader.close();
            }

        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return Optional.ofNullable(memberDTO);
    }
    //    카카오 로그아웃
    public String getKakaoLogoutURL(){
        String requestURI = "https://kauth.kakao.com/oauth/logout"; // 로그아웃 페이지
        String clientId = "87bef4c36fab14d5714ce773bdd6f030";   // 내 RestApi 키
        String redirectURI = "http://13.125.14.57:10000/"; // 로그아웃 후 넘어갈 창

        return requestURI + "?client_id=" + clientId + "&logout_redirect_uri=" + redirectURI;
    }
}
