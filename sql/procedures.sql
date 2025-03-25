DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `registraPlanta`(IN `uNombre` VARCHAR(250))
INSERT INTO plantas(nombre) VALUES (uNombre)$$
DELIMITER ;