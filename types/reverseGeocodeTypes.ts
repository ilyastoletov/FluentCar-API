type GeoObjectCollection {
    metaDataProperty: {
      GeocoderResponseMetaData: {
        request: string;
        results: string;
        found: string;
      };
    };
    featureMember: Array<{
      GeoObject: {
        metaDataProperty: {
          GeocoderMetaData: {
            precision: string;
            text: string;
            kind: string;
            Address: {
              country_code: string;
              formatted: string;
              postal_code: string;
              Components: Array<{
                kind: string;
                name: string;
              }>;
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
                      LocalityName: string;
                      Thoroughfare: {
                        ThoroughfareName: string;
                        Premise: {
                          PremiseNumber: string;
                          PostalCode: {
                            PostalCodeNumber: string;
                          };
                        };
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
    }>;
  }
  
  type ReverseResponse = {
    GeoObjectCollection: GeoObjectCollection;
  }
  
export type ReverseGeocodeResponse = {
    response: ReverseResponse;
  }
  