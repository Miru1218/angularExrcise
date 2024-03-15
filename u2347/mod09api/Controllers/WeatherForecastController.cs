using Microsoft.AspNetCore.Mvc;

namespace mod09api.Controllers;

[ApiController]
[Route("wf")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet("{id}")]
    public ActionResult<string> Get(int id)
    {
        if (id >= Summaries.Length)
            return NotFound();
        return Summaries[id];
    }

    [HttpGet("{year}/{month}/{day}")]
    public ActionResult<string> Get(int year, int month, int day)
    {
        return (new DateTime(year, month, day)).ToString();
    }
    [HttpGet("s/{s1}/{s2}/{s3}")]
    public ActionResult<string> Get(string s1, string s2, string s3)
    {
        return (s1 + s2 + s3).ToString();
    }
    [HttpPost()]
    public ActionResult<string> POST(WeatherForecast wf)
    {
        var result = $"POST> Date: {wf.Date}, C:{wf.TemperatureC}, F:{wf.TemperatureF}, Summary: {wf.Summary}";
        Console.WriteLine(result);
        return result;
    }

}
