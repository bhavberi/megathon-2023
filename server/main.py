from os import getenv
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from db import db
from routes import router

load_dotenv()
DEBUG = getenv("DEBUG", "false").lower() in ("true", "1", "t")
print(DEBUG)

if DEBUG:
    app = FastAPI(
        debug=DEBUG,
        title="Team Pandavas",
        description="Team Pandavas API Server",
    )
else:
    app = FastAPI(
        debug=DEBUG,
        title="Team Pandavas",
        description="Team Pandavas API Server",
        docs_url=None,
        redoc_url=None
    )

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

app.include_router(router, prefix="", tags=["Main Router"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)