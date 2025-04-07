CREATE TRIGGER `registraBitacora_proveedor` AFTER INSERT ON `proveedores`
 FOR EACH ROW INSERT INTO bitacora VALUES (default, 'Nuevo proveedor', NEW.rfc, NOW())

CREATE TRIGGER `registraBitacora_entrega` AFTER INSERT ON `bitacora`
 FOR EACH ROW INSERT INTO bitacora VALUES (default, 'Nueva entrega', NEW.Clave, NOW())
