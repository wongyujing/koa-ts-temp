type CodeNumber = 0 | 10001;

export type CodeType = {
  [key in CodeNumber]: string;
};

const code: CodeType = {
  0: 'success',
  10001: 'invalid params',
}

export default code
