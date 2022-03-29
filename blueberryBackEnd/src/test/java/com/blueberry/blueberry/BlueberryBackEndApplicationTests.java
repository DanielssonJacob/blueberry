package com.blueberry.blueberry;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class BlueberryBackEndApplicationTests {

	@Autowired
	MockMvc mvc;

	//To be able to send the object as text in the HTTP request we will use an ObjectMapper
	//object.
	@Autowired
	ObjectMapper mapper;

	@Test
	void contextLoads() {
	}

	//Test on GetMapping Companies - Correct values in string
	@Test
	void testGetCompanies() throws Exception{
		mvc.perform(
				MockMvcRequestBuilders.get("/companies")
		)
				.andExpect(MockMvcResultMatchers.content().string(containsString("Movember")))
				.andExpect(MockMvcResultMatchers.content().string(not(containsString("Good bye Academy"))));

	}
	//Test on GetMapping on a company with PathVariable
	@Test
	void testGetOneCompany() throws Exception{
		mvc.perform(
						MockMvcRequestBuilders.get("/company/{name}", "UNICEF")
				)
				.andExpect(MockMvcResultMatchers.content().string(containsString("Pernilla Baralt")))
				.andExpect(MockMvcResultMatchers.content().string(containsString("Sankt Eriksgatan")))
				.andExpect(MockMvcResultMatchers.content().string(not(containsString("Alingsås"))));

	}

	//Test that the company we're about to create doesn't already exist
	@Test
	void testPostCompanyNameNotExist() throws Exception {
		Map<String, Object> company = new HashMap<>();
		company.put("cName", "Stadsmissionen");
		company.put("cAddress", "Stigbergsliden 6, 414 63 Göteborg");
		company.put("cCity", "Göteborg");
		company.put("cPerson", "Sofie Lindh" );
		company.put("cDescription", "Stadsmissionen präglas av respekt för alla människors lika värde, rättigheter och möjligheter oavsett kön, könsöverskridande identitet eller uttryck, etnisk tillhörighet, religion eller annan trosuppfattning, funktionshinder, sexuell läggning eller ålder.");
		company.put("cHours", "08.00 till 15.30");
		mvc.perform(
				MockMvcRequestBuilders.post("/postcompany")
				.content(mapper.writeValueAsString(company))
				.contentType(MediaType.APPLICATION_JSON_UTF8)
		)
				.andExpect(status().is2xxSuccessful())
				.andExpect(MockMvcResultMatchers.content().string(containsString("Stadsmissionen")));
	}
}
