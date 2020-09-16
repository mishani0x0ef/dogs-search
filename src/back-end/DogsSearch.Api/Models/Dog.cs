using Newtonsoft.Json;
using System;
using System.Collections.Generic;

/// <summary>
/// Represents information about dog.
/// </summary>
public class Dog
{
    /// <summary>
    /// Unique identity of the pet.
    /// </summary>
    [JsonProperty("id")]
    public Guid DogId { get; set; }

    /// <summary>
    /// Pet's name.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Date and time when the dog was born.
    /// </summary>
    public DateTimeOffset Birthday { get; set; }

    /// <summary>
    /// URL to the primary image of the dog. Cute picture of the pet.
    /// </summary>
    public string ImageUrl { get; set; }

    /// <summary>
    /// Dog's gender (male or female).
    /// </summary>
    public Gender Gender { get; set; }

    /// <summary>
    /// Short story of the pet. Typically describing how it was found and what habits he has.
    /// </summary>
    public string Story { get; set; }

    /// <summary>
    /// (Optional) Location where it's currently live. Applicable only for dogs that weren't adopted yet.
    /// </summary>
    public Location Location { get; set; }

    /// <summary>
    /// Gallery of additional cute pictures of the dog.
    /// </summary>
    public List<string> AdditionalImages { get; set; }

    /// <summary>
    /// Identify if dog was already adopted.
    /// </summary>
    public bool IsAdopted { get; set; }

    /// <summary>
    /// Age of the pet represented in timespan - `days.hours:minutes:seconds.milliseconds`
    /// </summary>
    public TimeSpan Age => DateTimeOffset.Now - Birthday;
}

/// <summary>
/// Geographical location.
/// </summary>
public class Location
{
    /// <summary>
    /// Latitude coordinate.
    /// </summary>
    public double Lat { get; set; }

    /// <summary>
    /// Longitude coordinate.
    /// </summary>
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