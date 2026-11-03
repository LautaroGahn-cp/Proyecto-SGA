import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import GlobalStyles from "@mui/material/GlobalStyles"
import Toolbar from "@mui/material/Toolbar"
import { Link } from "react-router-dom"
import "../index.css"
import SelectorTema from "./SelectorTema"

export default function Header() {
    return (
        <>
            <GlobalStyles
                styles={(theme) => {
                    const accent = theme.palette.mode === "dark"
                        ? theme.palette.primary.light
                        : theme.palette.primary.main
                    return {
                        ":root": {
                            colorScheme: theme.palette.mode,
                            color: theme.palette.text.primary,
                            background: theme.palette.background.default,
                            "--sga-page": theme.palette.background.default,
                            "--sga-surface": theme.palette.background.paper,
                            "--sga-text": theme.palette.text.primary,
                            "--sga-muted": theme.palette.text.secondary,
                            "--sga-border": theme.palette.divider,
                            "--sga-accent": accent,
                            "--sga-accent-hover": theme.palette.mode === "dark"
                                ? theme.palette.primary.main
                                : theme.palette.primary.dark,
                            "--sga-button-text": theme.palette.mode === "dark" ? "#fff" : "#17232d",
                            "--sga-button-hover-text": "#fff",
                            "--sga-soft": theme.palette.action.hover,
                            "--sga-danger": theme.palette.error.main,
                        },
                    }
                }}
            />
            <AppBar
                    component="header"
                    position="static"
                    elevation={0}
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        bgcolor: "background.paper",
                        color: "text.primary",
                    }}
                >
                    <Toolbar
                        sx={{
                            width: { xs: "calc(100% - 32px)", sm: "min(calc(100% - 48px), 1180px)" },
                            minHeight: { xs: 104, sm: 88 },
                            mx: "auto",
                            px: "0 !important",
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr auto", md: "auto 1fr auto" },
                            gridTemplateAreas: {
                                xs: '"brand theme" "nav nav"',
                                md: '"brand nav theme"',
                            },
                            columnGap: { xs: 1, md: 3 },
                            rowGap: { xs: 0.5, md: 0 },
                        }}
                    >
                        <Box sx={{ gridArea: "brand", display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Box
                                component="img"
                                src="/sga-emblema.svg"
                                alt="Emblema del Sistema de Gestión Académica"
                                sx={{ width: 42, height: 42, borderRadius: 2 }}
                            />
                            <Box
                                component="span"
                                sx={{ fontSize: "1.25rem", fontWeight: 750, letterSpacing: "-0.03em" }}
                            >
                                SGA
                            </Box>
                        </Box>
                        <Box
                            component="nav"
                            aria-label="Navegación principal"
                            sx={{
                                gridArea: "nav",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: { xs: "center", md: "flex-end" },
                                gap: { xs: 0, sm: 0.5 },
                                flexWrap: "wrap",
                                "& .MuiButton-root": {
                                    minWidth: 0,
                                    px: { xs: 1, sm: 1.5 },
                                    borderRadius: 2,
                                    fontSize: { xs: "0.8rem", sm: "0.875rem" },
                                    fontWeight: 600,
                                    "&:hover": { bgcolor: "action.hover" },
                                },
                            }}
                        >
                            <Button component={Link} to="/" color="inherit">Inicio</Button>
                            <Button component={Link} to="/alumnos" color="inherit">Alumnos</Button>
                            <Button component={Link} to="/docentes" color="inherit">Docentes</Button>
                            <Button component={Link} to="/materias" color="inherit">Materias</Button>
                            <Button component={Link} to="/ayuda" color="inherit" aria-label="Ayuda">Ayuda</Button>
                        </Box>
                        <Box
                            sx={{
                                gridArea: "theme",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                "& > .MuiBox-root": { width: "auto", mb: 0 },
                            }}
                        >
                            <SelectorTema />
                        </Box>
                    </Toolbar>
            </AppBar>
        </>
    )
}