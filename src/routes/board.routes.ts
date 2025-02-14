import { BoardController } from '../controllers/board.controller';
import { verifyToken } from '../middleware/user.middleware';
import { Router } from 'express';

export const boardRoutes = Router();

const boardController = new BoardController();

boardRoutes.get('/board', verifyToken, boardController.getAllBoards);
boardRoutes.get('/board/is-liked', verifyToken, boardController.isBoardLikedByUser);

boardRoutes.post('/board', verifyToken, boardController.createBoard);
boardRoutes.post('/board/like', verifyToken, boardController.likeBoard);

boardRoutes.put('/board', verifyToken, boardController.updateBoard);

boardRoutes.delete('/board', verifyToken, boardController.deleteBoard);
