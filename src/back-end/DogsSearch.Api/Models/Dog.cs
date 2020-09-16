using Newtonsoft.Json;
using System;
using System.Collections.Generic;

public class Dog
{
    [JsonProperty("id")]
    public Guid DogId { get; set; }
    public string Name { get; set; }
    public DateTimeOffset Birthday { get; set; }
    public string ImageUrl { get; set; }
    public Gender Gender { get; set; }
    public string Story { get; set; }

    public Location Location { get; set; }

    public List<string> AdditionalImages { get; set; }

    public bool IsAdopted { get; set; }

    public TimeSpan Age => DateTimeOffset.Now - Birthday;
}

public class Location
{
    public double Lat { get; set; }
    public double Long { get; set; }

    public Location()
    {
    }

    public Location(double lat, double @long)
    {
        Lat = lat;
        Long = @long;
    }
}