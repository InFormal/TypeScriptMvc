using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcKoTs.Startup))]
namespace MvcKoTs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
