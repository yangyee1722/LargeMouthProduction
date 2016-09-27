package com.lgm.test;

import org.junit.Test;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.containsString;

public class MainControllerTest {
	@Test
	public void RunTime() {
		String testString = "hello";
		assertThat(testString, containsString("hello"));
	}
}
