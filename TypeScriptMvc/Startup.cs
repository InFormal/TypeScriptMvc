using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TypeScriptMvc.Startup))]
namespace TypeScriptMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
