import {Request, Response} from 'express';

export function getIndex(req: Request, res: Response): void {
    res.render('index');
}

export function getAbout(req: Request, res: Response): void {
    res.render('about');
}
