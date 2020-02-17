package rest;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

public class basics2 {
	@Test

	public void postData()
	{
		RestAssured.baseURI="http://fetchrss.com";
		given().
		queryParam("auth","5e3d37d28a93f8785c8b4568.4xqHn8SzjUz28X4KV").
		queryParam("url","http://facebook.com/cnn").
		when().
		post("/api/v1/feed/create").
		then().assertThat().statusCode(200).and().contentType(ContentType.JSON);
		
	}

}
	