package rest;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import org.testng.annotations.Test;



public class basic {
	@Test
	
public void Test()
{

		RestAssured.baseURI="http://fetchrss.com";
			given().
		       param("auth","5e3d37d28a93f8785c8b4568.4xqHn8SzjUz28X4KV").
		       param("url","http://facebook.com/cnn").
		       when().
		       get("/api/v1/feed/create").
		       then().assertThat().statusCode(200).and().contentType(ContentType.JSON).and().
		       body("feed.id",equalTo("5e4a30038a93f822378b4567")).and().
		       body("target_url",equalTo("http://facebook.com/cnn")).and()
		       .header("Server", "nginx");
		       
		       
		     

}

}
