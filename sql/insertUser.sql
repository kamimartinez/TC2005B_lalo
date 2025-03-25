DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUser`(IN `uUsername` VARCHAR(250), IN `uPassword` VARCHAR(250))
INSERT INTO usuarios(username, password) VALUES (uUsername, uPassword)$$
DELIMITER ;