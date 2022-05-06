using Microsoft.AspNetCore.Mvc;
using sixdegress.Contexts;
using sixdegress.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace sixdegress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext context;
        public ClientesController(AppDbContext context)
        {
            this.context = context;
    }
        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<PruebaSD> Get()
        {
            return context.PruebaSD.ToList();
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public PruebaSD Get(int id)
        {
            var cliente = context.PruebaSD.FirstOrDefault(p => p.usuID == id);
            return cliente;
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
