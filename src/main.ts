import "dotenv/config";
import { ClassSerializerInterceptor, RequestMethod, ValidationPipe } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "@src/app/app.module";
import cookieParser from "cookie-parser";
import { Logger, LoggerErrorInterceptor } from "nestjs-pino";


const PORT = process.env.PORT || 4114;
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.setGlobalPrefix("api", {
    exclude: [
      { method: RequestMethod.POST, path: "internal/line-message-deliveries" },
      {
        method: RequestMethod.POST,
        path: "internal/bot-appointment-reminders"
      }
    ]
  });
  //logger
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  //serializer(based on entity exclude decorator, class transform)
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  //dto validation
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(cookieParser());

  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
