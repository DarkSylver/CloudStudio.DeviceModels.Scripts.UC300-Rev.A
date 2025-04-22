function getConfiguration(config) {
    // This function allows you to indicate general configuration values
    // for all devices of this model.

    // Depending on the meaning of the "device address" in this device, 
    // you may want to change the label that is used to refer to the 
    // address in the user interface.
    // For instance, if the address of the device is actually a MAC 
    // address, you may want to use the code below.

    config.addressLabel = { en: "DevEUI", es: "DevEUI" };
}

function getEndpoints(deviceAddress, endpoints) {

    var s11 = endpoints.addEndpoint("1", "Sensor 1 - PH", endpointType.genericSensor);
    s11.variableTypeId = 1373;

    var s12 = endpoints.addEndpoint("2", "Sensor 1 - Moisture", endpointType.humiditySensor);

    endpoints.addEndpoint("3", "Sensor 1 - Temperature", endpointType.temperatureSensor);
    
    var s14 = endpoints.addEndpoint("4", "Sensor 1 - Conductivity", endpointType.genericSensor);
    s14.variableTypeId = 1374;

    var s15 = endpoints.addEndpoint("5", "Sensor 1 - Nitrogen", endpointType.genericSensor);
    s15.variableTypeId = 1375;

    var s16 = endpoints.addEndpoint("6", "Sensor 1 - Phosphorus", endpointType.genericSensor);
    s16.variableTypeId = 1375;

    var s17 = endpoints.addEndpoint("7", "Sensor 1 - Potassium", endpointType.genericSensor);
    s17.variableTypeId = 1375;

     var s21 = endpoints.addEndpoint("8", "Sensor 2 - PH", endpointType.genericSensor);
    s21.variableTypeId = 1373;

    var s22 = endpoints.addEndpoint("9", "Sensor 2 - Moisture", endpointType.humiditySensor);

    endpoints.addEndpoint("10", "Sensor 2 - Temperature", endpointType.temperatureSensor);
    
    var s24 = endpoints.addEndpoint("11", "Sensor 2 - Conductivity", endpointType.genericSensor);
    s24.variableTypeId = 1374;

    var s25 = endpoints.addEndpoint("12", "Sensor 2 - Nitrogen", endpointType.genericSensor);
    s25.variableTypeId = 1375;

    var s26 = endpoints.addEndpoint("13", "Sensor 2 - Phosphorus", endpointType.genericSensor);
    s26.variableTypeId = 1375;

    var s27 = endpoints.addEndpoint("14", "Sensor 2 - Potassium", endpointType.genericSensor);
    s27.variableTypeId = 1375;

  

}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
