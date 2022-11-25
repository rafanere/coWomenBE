const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['x-api-key']
  const secret = process.env.SECRET;
    if(token) {
      jwt.verify(token, secret, (err, user) => {
        if (err) {
          res.status(400).json({err})
        } else {
          req.user = user
          next()
        }
      })
    } else {
      return res.status(401).json("Unauthorized")
    }
}


const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndBuyer = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isBuyer) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndSeller = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isSeller) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndBuyer,
  verifyTokenAndSeller
};
