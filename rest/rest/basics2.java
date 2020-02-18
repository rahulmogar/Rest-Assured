package rest;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import org.testng.annotations.Test;

public class basics2 {
	@Test

	public void postData()
	{
		RestAssured.baseURI="http://fetchrss.com";
		Response res = given().
		queryParam("auth","5e3d37d28a93f8785c8b4568.4xqHn8SzjUz28X4KV").
		queryParam("url","http://facebook.com/cnn").
		when().
		post("/api/v1/feed/create").
		then().assertThat().statusCode(200).and().contentType(ContentType.JSON).and().
		body("success",equalTo(true)).
		
		extract().response();
		
		String responseString = res.asString();
		System.out.println(responseString);
//		JsonPath js = new JsonPath(responseString);
//		String feed = js.get("feed");
//		System.out.println(feed);
		
	}

}
	