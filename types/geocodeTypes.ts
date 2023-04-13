export type GeocoderParams = {
    "latitude": Number,
    "longitude": Number
}

export type ReverseGeocodeParams = {
    "adress_string": String
}

type GeoObject = {
    metaDataProperty: {
      GeocoderMetaData: {
        precision: string;
        text: string;
        kind: string;
        Address: {
          country_code: string;
          formatted: string;
          Components: {
            kind: string;
            name: string;
          }[];
        };
        AddressDetails: {
          Country: {
            AddressLine: string;
            CountryNameCode: string;
            CountryName: string;
            AdministrativeArea: {
              AdministrativeAreaName: string;
              SubAdministrativeArea: {
                SubAdministrativeAreaName: string;
                Locality: {
                  Premise: {
                    PremiseName: string;
                  };
                };
              };
            };
          };
        };
      };
    };
    name: string;
    description: string;
    boundedBy: {
      Envelope: {
        lowerCorner: string;
        upperCorner: string;
      };
    };
    Point: {
      pos: string;
    };
  };
  
  type FeatureMember = {
    GeoObject: GeoObject;
  };
  
  type GeocoderResponseMetaData = {
    Point: {
      pos: string;
    };
    request: string;
    results: string;
    found: string;
  };
  
  type GeoObjectCollection = {
    metaDataProperty: {
      GeocoderResponseMetaData: GeocoderResponseMetaData;
    };
    featureMember: FeatureMember[];
  };
  
  type Response = {
    GeoObjectCollection: GeoObjectCollection;
  };
  
  export type GeocodeResponse = {
    response: Response;
  };
  