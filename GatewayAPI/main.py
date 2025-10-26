from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from datetime import datetime

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/external/waiting/{request_id}", response_class=HTMLResponse)
async def waiting_page(request: Request, request_id: str):
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return templates.TemplateResponse(
        "waiting.html",
        {"request": request, "request_id": request_id, "current_time": now},
    )
