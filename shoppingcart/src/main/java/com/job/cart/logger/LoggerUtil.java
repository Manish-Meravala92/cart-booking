package com.job.cart.logger;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LoggerUtil {

	public static final Logger getLogger(String className) {
		Logger logger = null;
		try {
			logger = LogManager.getLogger(className);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return logger;
	}

}
