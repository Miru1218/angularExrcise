Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


dotnet tool install -g dotnet-aspnet-codegenerator --version 7

dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design --version 7


dotnet aspnet-codegenerator controller -name MeetingRoomsController -async -api -m MeetingRoom -dc MeetingRoomContext -outDir Controllers

https://github.com/anitaloggg/u2347v15/

dotnet publish --configuration Release

ng g environments --project mod10
